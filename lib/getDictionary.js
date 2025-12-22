// It reads JSON from /locales (server-only).
import fs from "fs";
import path from "path";

export async function getDictionary(lang = "en") {
  const filePath = path.join(process.cwd(), "locales", `${lang}.json`);
  try {
    const raw = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error loading dictionary:", err);
    return {}; // fallback empty object
  }
}
