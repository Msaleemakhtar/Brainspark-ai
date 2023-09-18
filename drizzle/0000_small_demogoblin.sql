CREATE TABLE IF NOT EXISTS "UserApiLimit" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" varchar,
	"count" integer DEFAULT 0,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "UserApiLimit_userId_unique" UNIQUE("userId")
);
