 import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  role: varchar('role', { length: 50 }).notNull().default('user'),
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp().defaultNow().notNull(),
});

/** CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,                        -- Identificador único autoincremental
    name VARCHAR(255) NOT NULL,                   -- Nombre del usuario (obligatorio, máx 255 caracteres)
    email VARCHAR(255) NOT NULL UNIQUE,           -- Correo electrónico (obligatorio, único, máx 255 caracteres)
    password VARCHAR(255) NOT NULL,               -- Contraseña encriptada (obligatorio)
    role VARCHAR(50) NOT NULL DEFAULT 'user',     -- Rol del usuario ('user' por defecto)
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),  -- Fecha de creación automática
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()   -- Fecha de última actualización automática
);**/ 