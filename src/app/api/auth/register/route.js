import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { name, email, password } = request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
};
