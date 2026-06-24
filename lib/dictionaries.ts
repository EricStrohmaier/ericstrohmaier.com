import "server-only"
import type { Locale } from "@/i18n-config"

// Page-content dictionaries, one JSON file per (locale, namespace). Loaded
// lazily on the server so only the requested namespace ships per route.
const loaders = {
  en: {
    home: () => import("@/dictionaries/en/home.json").then((m) => m.default),
    about: () => import("@/dictionaries/en/about.json").then((m) => m.default),
    projects: () =>
      import("@/dictionaries/en/projects.json").then((m) => m.default),
    contact: () => import("@/dictionaries/en/contact.json").then((m) => m.default),
    timetracking: () =>
      import("@/dictionaries/en/timetracking.json").then((m) => m.default),
  },
  de: {
    home: () => import("@/dictionaries/de/home.json").then((m) => m.default),
    about: () => import("@/dictionaries/de/about.json").then((m) => m.default),
    projects: () =>
      import("@/dictionaries/de/projects.json").then((m) => m.default),
    contact: () => import("@/dictionaries/de/contact.json").then((m) => m.default),
    timetracking: () =>
      import("@/dictionaries/de/timetracking.json").then((m) => m.default),
  },
} as const

export type Namespace = keyof (typeof loaders)["en"]

export async function getDictionary<N extends Namespace>(
  locale: Locale,
  namespace: N,
): Promise<Awaited<ReturnType<(typeof loaders)["en"][N]>>> {
  const byLocale = loaders[locale] ?? loaders.en
  return byLocale[namespace]() as Promise<
    Awaited<ReturnType<(typeof loaders)["en"][N]>>
  >
}
