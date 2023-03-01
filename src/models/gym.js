import { prisma } from "@/prisma/client";
import { User } from "@/models/user";
import { isAdmin } from "@/utils/helpers";
import { error } from "@/models/error";

export const Gym = {
  async addGym(_parent, data, _context) {
    try {
      if (!isAdmin(_context.user)) throw { code: 401, message: "Unauthorized" };
      const user = await User.addUser(_parent, data, _context);
      const gym = await prisma.gym.create({
        data: {
          name: data.name,
          cityId: data.cityId,
          address: data.address,
          userId: user.id,
        },
      });
      return gym;
    } catch (err) {
      return error.getError(err);
    }
  },
};
