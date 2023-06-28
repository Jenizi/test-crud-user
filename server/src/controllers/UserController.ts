import { Request, Response } from "express";
import * as UserData from "../data/UserData";
import { validateUser } from "../validation/UserValidation";
import bcrypt from "bcrypt";

export const create = async (request: Request, response: Response) => {
  const { name, cpf, login } = request.body;
  let { password } = request.body;
  const validations = validateUser(name, cpf, login, password);
  if (validations) return response.status(401).json({ message: validations });

  const users = await UserData.getUsers();
  const userExists = users.find((e) => e.login == login || e.cpf == cpf);
  if (userExists)
    return response
      .status(400)
      .json({ message: "User already registered in the system." });

  password = await bcrypt.hash(password, 10);
  await UserData.create(name, cpf, login, password);

  return response.status(201).json({ message: "User created successfully." });
};

export const getUsers = async (request: Request, response: Response) => {
  const users = await UserData.getUsers();
  const result = users.map(({ password, ...user }) => user);

  return response.status(200).json(result);
};

export const update = async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id);
  const { name } = request.body;
  if (!name || name.length < 4 || name.length > 60)
    return response
      .status(401)
      .json({ message: "Name field missing/exceeded amount of characters." });

  await UserData.update(id, name);

  return response.status(200).json({ message: "Successfully updated." });
};

export const deleteUser = async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id);

  if (!id)
    return response.status(401).json({ message: "ID parameter missing." });
  const user = await UserData.getUserById(id);

  if (!user) return response.status(404).json({ message: "User not found." });
  await UserData.deleteUser(id);

  return response.status(200).json({ message: "User deleted successfully." });
};
