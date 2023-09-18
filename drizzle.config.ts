import type { Config } from "drizzle-kit";
 
export default {
  schema: "./db/schema.ts",
  out:"./drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString:
    "postgres://default:5EIq8gUyYXAd@ep-icy-art-239334-pooler.us-east-1.postgres.vercel-storage.com/verceldb?sslmode=require"
  }
} satisfies Config;