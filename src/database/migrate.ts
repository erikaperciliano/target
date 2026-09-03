import { SQLiteDatabase } from "expo-sqlite";

export async function migrate(database: SQLiteDatabase) {
    await database.execAsync(`
        PRAGMA foreing_keys = ON;
        
        CREATE TABLE IF NOT EXISTS targets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            amount FLOAT NOT NULL,
            created_at timestamp NOT NULL DEFAULT current_timestamp,
            updated_at timestamp NOT NULL DEFAULT current_timestamp,
        );

        CREATE TABLE IF NOT EXISTS  transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            target_id  INTEGER NOT NULL,
            amount FLOAT NOT NULL,
            observation TEXT NULL,
            created_at timestamp NOT NULL DEFAULT current_timestamp,
            updated_at timestamp NOT NULL DEFAULT current_timestamp,

            CONSTRANT fk_targets_transactions
            FOREING KEY (target_id) REFERENCES targets(id)
            ON DELETE CASCADE
        );
    `)
}