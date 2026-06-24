import { betterAuth } from "better-auth"
import { nextCookies } from "better-auth/next-js"
import { LibsqlDialect } from "@libsql/kysely-libsql"

const dialect = new LibsqlDialect({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
})

export const auth = betterAuth({
  database: { dialect, type: "sqlite" },
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    autoSignIn: true,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 30, // 30 days
    cookieCache: { enabled: true, maxAge: 5 * 60 },
  },
  // nextCookies() must be the last plugin so it can attach Set-Cookie
  // headers returned by server actions.
  plugins: [nextCookies()],
})

export type Session = typeof auth.$Infer.Session
