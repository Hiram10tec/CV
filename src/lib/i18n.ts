import enMessages from "@/messages/en.json";
import esMessages from "@/messages/es.json";
import deMessages from "@/messages/de.json";

export type Locale = "en" | "es" | "de";

export const locales: Array<{ code: Locale; label: string }> = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "de", label: "DE" },
];

export const defaultLocale: Locale = "en";

const messages = {
  en: enMessages,
  es: esMessages,
  de: deMessages,
} as const;

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "es" || value === "de";
}

export function getMessages(locale: Locale) {
  return messages[locale];
}
