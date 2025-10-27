import { defineConfig } from "prisma/config";
import dotenv from "dotenv";

// Carrega o arquivo .env
dotenv.config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: process.env.DATABASE_URL ?? "file:./dev.db", // Garante um fallback
  },
});