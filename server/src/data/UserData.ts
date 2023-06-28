import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (
  name: string,
  cpf: string,
  login: string,
  password: string
) => {
  const user = await prisma.user.create({
    data: {
      name,
      cpf,
      login,
      password,
    },
  });

  return user;
};

export const getUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return users;
};

export const getUserById = async (id: number) => {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  return user;
};

export const update = async (
  id: number,
  name?: string,
  login?: string,
  password?: string
) => {
  await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      login,
      password,
    },
  });
};

export const deleteUser = async (id: number) => {
  await prisma.user.delete({
    where: {
      id,
    },
  });
};
