import { DataSource } from "typeorm";
import { config } from "dotenv";

import { User } from "../models/User";
import { Character } from "../models/Character";

config();

export const AppData = new DataSource({
  type: "mongodb",
  url: `mongodb://${process.env.FELIX_FACTS_DATABASE_USERNAME}:${process.env.FELIX_FACTS_DATABASE_PASSWORD}@${process.env.FELIX_FACTS_DATABASE_HOST}:${process.env.FELIX_FACTS_DATABASE_PORT}/${process.env.FELIX_FACTS_DATABASE_NAME}?authSource=admin`,
  synchronize: true,
  logging: true,
  entities: [User, Character],
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
