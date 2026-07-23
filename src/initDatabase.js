const fs = require("fs");
const path = require("path");
const pool = require("./db");

async function initializeDatabase() {
    try {
        const sql = fs.readFileSync(
            path.join(__dirname, "../database/init.sql"),
            "utf8"
        );

        await pool.query(sql);

        console.log("✅ Database initialized");
    } catch (err) {
        console.error("❌ Database initialization failed:", err);
    }
}

module.exports = initializeDatabase;