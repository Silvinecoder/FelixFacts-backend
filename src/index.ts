import app from "./app";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 5000;

// Connect DB
connectDB().then(() => {
  app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
  });
});
