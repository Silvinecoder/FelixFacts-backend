import { AppData } from "../config/db";
import { User } from "../models/User";
import { Character } from "../models/Character";
import { ObjectId } from "mongodb";
import { hashMyPassword } from "../middleware/authentication/password";

const seedDatabase = async () => {
  if (!AppData.isInitialized) {
    await AppData.initialize();
  }

  const userRespository = AppData.getMongoRepository(User);
  const characterRepository = AppData.getMongoRepository(Character);

  const existingUsers = await userRespository.count();
  if (existingUsers > 0) {
    console.log("⚠️ Users already exist. skipping seeding");
    return;
  }

  const user = new User(
    new ObjectId(),
    "test@example.com",
    "testUserName",
    await hashMyPassword("1234"),
    1234,
    100,
    new Date(),
    new Date()
  );

  await userRespository.save(user);

  const character = new Character(
    new ObjectId(),
    user._id,
    "testCharacter",
    "Elf",
    "leo",
    "ranger",
    1,
    100,
    "happy",
    new Date(),
    new Date()
  );

  await characterRepository.save(character);

  console.log("✅ Database seeded successfully!");
  process.exit(0);
};

seedDatabase().catch((error) => {
  console.error("❌ Seeding failed:", error);
  process.exit(1);
});
