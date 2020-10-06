Migration record changes to the database structure over time, just like git commits record changes to code.

Configure knex connections

- npm i -g knex
- npm r -g knex

- knex init

Commonly used migration commands:

- npx knex migrate:make name...          <--crates a new migration file>
- npm knex migrate:latest         <--- run pending migrations to update db>

Track Food AKA menu items

menu_items table
-id: primary key, unsigned integer
-name: required (NOT NULL) string, unique, make searching by name fast!
-price: floating point,not required.
-available: boolean, default to false.

clients table

-id: primary key, uuid, string, unique, required
-email: string, unique, indexed
-name: string, indexed

>EVERY CHANGE TO THE DATABASE SCHEMA(STRUCTURE) SHOULD BE DONE WITH A NEW MIGRATION