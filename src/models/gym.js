import { prisma } from "@/prisma/client";
import { User } from "@/models/user";
import { isSuperAdmin } from "@/utils/helpers";
import { error } from "@/models/error";

export const Gym = {
  async addGym(_parent, data, _context) {
    try {
      if (!isSuperAdmin(_context.user))
        throw { code: 401, message: "Unauthorized" };
      // console.log("data", data);

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

  async getGymList(_parent, data, _context) {
    try {
      if (!isSuperAdmin(_context.user))
        throw { code: 401, message: "Unauthorized" };

      let { page, page_size } = data;
      if (page > 0) page -= 1;
      const gyms = await prisma.gym.findMany({
        take: page_size,
        skip: page_size * page,
        include: {
          city: {
            select: { name: true },
          },
        },
      });
      const totalGyms = await prisma.gym.count({});
      return {
        results: gyms,
        current: page + 1,
        pages: Math.ceil(totalGyms / page_size),
        total: totalGyms,
      };
    } catch (err) {}
  },
};
