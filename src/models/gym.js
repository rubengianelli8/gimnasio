import { prisma } from "@/prisma/client";
import { User } from "@/models/user";
import { isSuperAdmin } from "@/utils/helpers";
import { error } from "@/models/error";

export const Gym = {
  async addGym(_parent, data, _context) {
    try {
      console.log(_context.user);
      if (!isSuperAdmin(_context.user))
        throw { code: 401, message: "Unauthorized" };
      // console.log("data", data);

      const user = await User.addUser(_parent, data.user, _context);
      console.log(user);
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
};
