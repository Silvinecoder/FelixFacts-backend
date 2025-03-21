import { hashMyPassword } from "../../../middleware/authentication/password";
import bcrypt from "bcrypt";

test("should hash password and compare it when user logs-in", async () => {
  const password = "123Hello";
  const hashedPassword = await hashMyPassword(password);
  expect(hashedPassword).not.toBe(password);

  /* 
  Verifying that the plain password matches the hashed password
  during the login process.
  */
  const isMatched = await bcrypt.compare(password, hashedPassword);
  expect(isMatched).toBe(true);
});
