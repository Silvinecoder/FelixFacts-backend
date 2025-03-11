import { DataSource } from "typeorm";
import { config } from "dotenv";

config();

export const AppData = new DataSource({
  type: "mongodb",
  host: process.env.STATS_DATABASE_HOST,
  port: parseInt(process.env.STATS_DATABASE_PORT || "54321"),
  username: process.env.STATS_DATABASE_USERNAME,
  password: process.env.STATS_DATABASE_PASSWORD,
  database: process.env.STATS_DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: [],
});

export const connectDB = async () => {
  try {
    await AppData.initialize();
    console.log("✅ Database connected!");
  } catch (error) {
    console.error("❌ Database connection error:", error);
    process.exit(1);
  }
};
