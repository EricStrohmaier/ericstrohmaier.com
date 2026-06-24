export const i18n = {
  defaultLocale: "en",
  locales: ["en", "de"],
} as const

export type Locale = (typeof i18n.locales)[number]

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (i18n.locales as readonly string[]).includes(value)
}
