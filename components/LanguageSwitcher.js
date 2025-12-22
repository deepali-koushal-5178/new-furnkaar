"use client";
import { useRouter, usePathname } from "next/navigation";

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // remove current locale prefix if any
  const base = pathname.replace(/^\/(en|hi)/, "") || "/";

  const go = (locale) => router.push(`/${locale}${base}`);

  return (
    <div>
      <button onClick={() => go("en")}>EN</button>
      <button onClick={() => go("hi")}>हिन्दी</button>
    </div>
  );
}
