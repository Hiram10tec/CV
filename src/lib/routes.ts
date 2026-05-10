import type { Locale } from "@/lib/i18n";

export function localizedHref(locale: Locale, hash = "") {
  return `/?lang=${locale}${hash}`;
}
