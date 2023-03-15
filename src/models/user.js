import { prisma } from "@/prisma/client";
import { error } from "./error";
import { hashPassword } from "@/utils/functions";
import { isAdmin, isSuperAdmin } from "@/utils/helpers";

export const User = {
  async getUser(_parent, { id }, _context) {
    try {
      return await prisma.user.findUnique({
        where: { id },
      });
    } catch (err) {
      return error.getError(err);
    }
  },
  async getUserList(_parent, { type, page, page_size }, _context) {
    try {
      let condition = {};
      if (type === "client")
        condition = {
          client: {
            some: {
              id: { not: undefined },
            },
          },
        };

      const users = await prisma.user.findMany({
        where: { ...condition },
        take: page_size,
        skip: (page - 1) * page_size,
      });
      const totalUsers = await prisma.user.count({
        where: { ...condition },
      });

      return {
        results: users,
        current: page,
        pages: Math.ceil(totalUsers / page_size),
        total: totalUsers,
      };
    } catch (err) {
      return error.getError(err);
    }
  },
  async addUser(_parent, data, _context) {
    try {
      const {
        user_type,
        first_name,
        last_name,
        password,
        email,
        phone_number,
      } = data;

      const existUser = await this.userExist(email);
      if (existUser) throw { code: 400, message: "userExist" };

      if (!isAdmin(_context.user) && !isSuperAdmin(_context.user))
        throw { code: 401, message: "Unauthorized" };

      let dataUser = {};
      if (user_type === "client")
        dataUser = {
          client: {
            create: {},
          },
          role_x_user: {
            create: {
              roleId: 2,
            },
          },
        };
      return await prisma.user.create({
        data: {
          first_name,
          last_name,
          email,
          phone_number,
          password: hashPassword(password),
          ...dataUser,
        },
      });
    } catch (err) {
      return error.getError(err);
    }
  },
  async updateUser(_parent, data, _context) {
    try {
      if (!isAdmin(_context.user)) throw { code: 401, message: "Unauthorized" };

      const user_exist = await prisma.user.findUnique({
        where: { id: data.id },
        select: { email: true },
      });
      if (!user_exist) throw { code: 400, message: "Bad request" };

      const existUserEmail = await this.userExist(email);
      if (existUserEmail && email !== user_exist.email)
        throw { code: 400, message: "userExist" };

      return await prisma.user.update({
        where: { id: data.id },
        data: {
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          phone_number: data.phone_number,
        },
      });
    } catch (err) {
      return error.getError(err);
    }
  },
  async userExist(email) {
    return await prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true },
    });
  },
};
