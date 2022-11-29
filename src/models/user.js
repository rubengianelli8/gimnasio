import { prisma } from "@/prisma/client";
import { error } from "./error";
import { hashPassword } from "@/utils/functions";

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
  async userExist(email) {
    return await prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true },
    });
  },
};
