// Stores one feedback screenshot in a private Vercel Blob store.
// The page compresses each photo first and sends the raw image bytes here.
// Only someone with access to the Vercel project can open what is stored.
import { put } from "@vercel/blob";
import { randomUUID } from "node:crypto";

const MAX_BYTES = 4 * 1024 * 1024; // Vercel functions accept bodies up to 4.5 MB
const TYPES = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };

// Check the file really is the image type it claims to be
function looksLike(buf, type) {
  if (buf.length < 12) return false;
  if (type === "image/jpeg") return buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff;
  if (type === "image/png") return buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
  if (type === "image/webp") return buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP";
  return false;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method" });
  }

  // Only accept uploads sent from this site
  const origin = req.headers.origin;
  if (origin) {
    let host = "";
    try { host = new URL(origin).host; } catch {}
    if (host !== req.headers.host) return res.status(403).json({ error: "origin" });
  }

  // Vercel names the token BLOB_READ_WRITE_TOKEN, or <PREFIX>_READ_WRITE_TOKEN if the store was connected with a custom prefix
  const tokenVar = process.env.BLOB_READ_WRITE_TOKEN ? "BLOB_READ_WRITE_TOKEN"
    : Object.keys(process.env).find(k => /_READ_WRITE_TOKEN$/.test(k) && String(process.env[k]).startsWith("vercel_blob_rw_"));
  if (!tokenVar) return res.status(503).json({ error: "not-configured" });
  const token = process.env[tokenVar];

  const type = String(req.headers["content-type"] || "").split(";")[0].trim().toLowerCase();
  if (!TYPES[type]) return res.status(415).json({ error: "type" });
  if (Number(req.headers["content-length"] || 0) > MAX_BYTES) return res.status(413).json({ error: "size" });

  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BYTES) return res.status(413).json({ error: "size" });
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks);
  if (!looksLike(body, type)) return res.status(415).json({ error: "type" });

  try {
    const day = new Date().toISOString().slice(0, 10);
    const blob = await put(`feedback/${day}/${randomUUID()}.${TYPES[type]}`, body, {
      access: "private",
      contentType: type,
      token,
    });
    return res.status(200).json({ pathname: blob.pathname });
  } catch (err) {
    console.error("feedback-photo: upload failed", err);
    return res.status(500).json({ error: "upload" });
  }
}
