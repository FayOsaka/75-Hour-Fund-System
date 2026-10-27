
const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

// Connect to the existing SQLite database
const dbPath = path.join(__dirname, "..", "DB_75-Hour.db");
const db = new Database(dbPath);

// Enable foreign key constraints for this connection
db.pragma("foreign_keys = ON");

// Test endpoint
app.get("/", (req, res) => {
  res.json({
    message: "75-Hour Fund System API is running"
  });
});

// Check database connection and list existing tables
app.get("/api/health", (req, res) => {
  try {
    const tables = db.prepare(`
      SELECT name
      FROM sqlite_master
      WHERE type = 'table'
        AND name NOT LIKE 'sqlite_%'
      ORDER BY name
    `).all();

    res.json({
      status: "ok",
      database: "connected",
      tables
    });
  } catch (error) {
    console.error("Database check failed:", error.message);
    res.status(500).json({
      status: "error",
      message: "Database check failed"
    });
  }
});


/**
 * GET /api/users
 * ดึงรายชื่อนักศึกษาทั้งหมด โดยไม่ส่งรหัสผ่านกลับไป
 */
app.get("/api/users", (req, res) => {
  try {
    const users = db.prepare(`
      SELECT
        user_id,
        user_sduID,
        user_firstname,
        user_lastname,
        user_phone,
        user_faculty,
        user_major
      FROM "user"
      ORDER BY user_id ASC
    `).all();

    res.json({
      status: "ok",
      count: users.length,
      data: users
    });
  } catch (error) {
    console.error("Failed to fetch users:", error.message);

    res.status(500).json({
      status: "error",
      message: "ไม่สามารถดึงข้อมูลนักศึกษาได้"
    });
  }
});


/**
 * GET /api/projects
 * ดึงรายการโครงการทั้งหมด
 */
app.get("/api/projects", (req, res) => {
  try {
    const projects = db.prepare(`
      SELECT
        project_id,
        project_name
      FROM project
      ORDER BY project_id ASC
    `).all();

    res.json({
      status: "ok",
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error("Failed to fetch projects:", error.message);

    res.status(500).json({
      status: "error",
      message: "ไม่สามารถดึงข้อมูลโครงการได้"
    });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
  console.log(`Database path: ${dbPath}`);
});
