const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/tasks");
const errorHandler = require("./middleware/errorHandler");

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Parse incoming JSON requests

// MongoDB Connection Process
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/tasks", taskRoutes);

// Global Error Handler for unexpected Situations
app.use(errorHandler);

// Start the Server(type npm start in the console)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on cloud host`);
});
