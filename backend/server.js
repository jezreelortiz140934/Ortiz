import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Sample API endpoint
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Run server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

