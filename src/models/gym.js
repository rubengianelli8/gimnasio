import { prisma } from "@/prisma/client";
import { User } from "@/models/user";
import { isSuperAdmin } from "@/utils/helpers";
import { error } from "@/models/error";

export const Gym = {
  async addGym(_parent, data, _context) {
    try {
      if (!isSuperAdmin(_context.user))
        throw { code: 401, message: "Unauthorized" };

      const user = await User.addUser(_parent, data.user, _context);
      const gym = await prisma.gym.create({
        data: {
          name: data.name,
          cityId: data.cityId,
          address: data.address,
          price: data.price,
          isClient: data.isClient,
          userId: user.id,
        },
      });
      return gym;
    } catch (err) {
      return error.getError(err);
    }
  },
  async updateGym(_parent, data, _context) {
    try {
      if (!isSuperAdmin(_context.user))
        throw { code: 401, message: "Unauthorized" };
      // console.log("data", data);

      const gym = await prisma.gym.update({
        where: {
          id: data.id,
        },
        data: {
          name: data.name,
          cityId: data.cityId,
          address: data.address,
          price: data.price,
        },
        include: {
          admin: {
            select: {
              id: true,
            },
          },
        },
      });
      await User.updateUser(
        null,
        {
          id: gym.admin.id,
          first_name: data.user.first_name,
          last_name: data.user.last_name,
          email: data.user.email,
          phone_number: data.user.phone_number,
        },
        _context
      );

      return gym;
    } catch (err) {
      return error.getError(err);
    }
  },

  async getGymList(_parent, data, _context) {
    try {
      if (!isSuperAdmin(_context.user))
        throw { code: 401, message: "Unauthorized" };

      let { page, page_size } = data;
      if (page > 0) page -= 1;
      const gyms = await prisma.gym.findMany({
        take: page_size,
        skip: page_size * page,
        where: { deleted: false },
        include: {
          city: {
            select: { name: true },
          },
          admin: {
            select: { email: true },
          },
        },
      });
      const totalGyms = await prisma.gym.count({ where: { deleted: false } });
      return {
        results: gyms,
        current: page + 1,
        pages: Math.ceil(totalGyms / page_size),
        total: totalGyms,
      };
    } catch (err) {
      return error.getError(err);
    }
  },
  async getGym(_parent, { id }, _context) {
    try {
      if (!isSuperAdmin(_context.user))
        throw { code: 401, message: "Unauthorized" };

      const gym = await prisma.gym.findUnique({
        where: { id },
        include: {
          admin: {
            select: {
              email: true,
              last_name: true,
              first_name: true,
              phone_number: true,
            },
          },
          city: {
            select: {
              id: true,
              countryId: true,
            },
          },
        },
      });

      return gym;
    } catch (err) {
      return error.getError(err);
    }
  },
  async deleteGym(_parent, { id }, _context) {
    try {
      if (!isSuperAdmin(_context.user))
        throw { code: 401, message: "Unauthorized" };

      return await prisma.gym.update({
        where: {
          id,
        },
        data: {
          deleted: true,
        },
      });
    } catch (err) {
      return error.getError(err);
    }
  },
};
