import {
    integer,
    pgTable,
    serial,
    varchar,
    timestamp,
  } from "drizzle-orm/pg-core";
  
  export const UserApiLimit = pgTable("UserApiLimit", {
    id: serial("id").primaryKey(),
    userId: varchar("userId").unique(),
    count: integer("count").default(0),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  });
  