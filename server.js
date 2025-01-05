// server.js
const express = require("express");
const path = require("path");
const app = express();

const authRoutes = require("./src/routes/auth");
const classRoutes = require("./src/routes/class");
const lessonRoutes = require("./src/routes/lessons");
const quizRoutes = require("./src/routes/quiz");
const leaderboardRoutes = require("./src/routes/leaderboard");

// Middleware
app.use(express.static("public"));
app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/class", classRoutes);
app.use("/api/lesson", lessonRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

// Handle both two-level and three-level routes
app.get("/:section/:action/:id?", (req, res) => {
  const { section, action } = req.params;

  // List of valid sections that can have nested routes
  const validSections = ["lesson", "quiz", "class"];

  if (validSections.includes(section)) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  } else {
    res.status(404).send("Page not found");
  }
});

// Handle single-level routes
app.get("/:page", (req, res) => {
  const validPages = [
    "login",
    "register",
    "dashboard",
    "quiz",
    "lesson",
    "class",
    "leaderboard",
  ];

  const page = req.params.page;

  if (validPages.includes(page)) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  } else {
    res.status(404).send("Page not found");
  }
});

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
