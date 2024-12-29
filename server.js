const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Route to handle form submission
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  // You can store the data in your database or process it here
  console.log("Received data:", { name, email, message });

  // Respond to the frontend
  res.json({ success: true, message: "Data received successfully!" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
