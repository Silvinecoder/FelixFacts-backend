import bcrypt from "bcrypt";

/* salt rounds means that it will add a random value to the password 
    10 times before hashing
 */
const SALT_ROUNDS = 10;

/**
 * Securely hashes the user's password
 */
export async function hashMyPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, SALT_ROUNDS);
}
