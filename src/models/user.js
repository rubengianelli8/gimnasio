import { prisma } from "@/prisma/client";
import { error } from "./error";
import { hashPassword } from "@/utils/functions";
import { isAdmin, isSuperAdmin } from "@/utils/helpers";

export const User = {
  async getUser(_parent, { id, user_type }, _context) {
    try {
      return await prisma.user.findUnique({
        where: { id },
        select: {
          first_name: true,
          last_name: true,
          email: true,
          id: true,
          phone_number: true,
          [user_type]: true,
        },
      });
    } catch (err) {
      return error.getError(err);
    }
  },
  async getUserList(_parent, { type, page, page_size, search }, _context) {
    try {
      const userRoleIds = {
        admin: 2,
        teacher: 3,
        client: 4,
      };
      let search_ = {};
      if (search.length > 0) {
        search_ = {
          OR: [
            { first_name: { contains: search } },
            { last_name: { contains: search } },
          ],
        };
      }
      const users = await prisma.user.findMany({
        where: {
          role_x_user: {
            some: {
              roleId: userRoleIds[type],
            },
          },
          ...search_,
        },
        take: page_size,
        skip: (page - 1) * page_size,
      });
      const totalUsers = await prisma.user.count({
        where: {
          role_x_user: {
            some: {
              roleId: userRoleIds[type],
            },
          },
          ...search_,
        },
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
      let { user_type, first_name, last_name, password, email, phone_number } =
        data;

      const existUser = await this.userExist(email);
      if (existUser) throw { code: 400, message: "userExist" };

      if (!user_type) throw { code: 400, message: "user type is required" };
      if (user_type === "admin" && !isSuperAdmin(_context.user))
        throw { code: 401, message: "Unauthorized" };
      if (user_type === "teacher" && !isAdmin(_context.user))
        throw { code: 401, message: "Unauthorized" };

      const userTypes = {
        admin: 2,
        teacher: 3,
        client: 4,
      };
      let dataUser = {
        [user_type]: {
          create: {},
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
          role_x_user: {
            create: {
              roleId: userTypes[user_type],
            },
          },
        },
      });
    } catch (err) {
      return error.getError(err);
    }
  },
  async updateUser(_parent, data, _context) {
    try {
      if (!isAdmin(_context.user) && !isSuperAdmin(_context.user))
        throw { code: 401, message: "Unauthorized" };

      const user_exist = await prisma.user.findUnique({
        where: { id: data.id },
        select: {
          email: true,
          admin: {
            select: {
              id: true,
            },
          },
          teacher: {
            select: {
              id: true,
            },
          },
        },
      });
      if (!user_exist) throw { code: 400, message: "Bad request" };

      if (user_exist.admin.length && !isSuperAdmin(_context.user))
        throw { code: 401, message: "Unauthorized" };
      if (
        user_exist.teacher.length &&
        !isSuperAdmin(_context.user) &&
        !isAdmin(_context.user)
      )
        throw { code: 401, message: "Unauthorized" };

      const existUserEmail = await this.userExist(data.email);
      if (existUserEmail && data.email !== user_exist.email)
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

  async deleteUser(_parent, { id }, _context) {
    try {
      const user_exist = await prisma.user.findUnique({
        where: { id },
        select: { id: true },
      });
      if (!user_exist) throw { code: 400, message: "User not found" };
      console.log(id);
      return await prisma.user.delete({
        where: { id },
        select: { id: true },
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
