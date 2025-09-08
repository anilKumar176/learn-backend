const express = require("express");
const app = express();
const PORT = 4000; // Choose a different port than your main server if it's already running on 5000

app.use(express.json());

// Define a simple GET API endpoint
app.get("/api/hello", (req, res) => {
  res.status(200).json({
    message: "Hello from your new API!",
    timestamp: new Date().toISOString(),
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Example API server running on http://localhost:${PORT}`);
});
