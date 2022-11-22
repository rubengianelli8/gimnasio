import { prisma } from "@/prisma/client";
import { hashPassword } from "@/utils/functions";

export const Auth = {
  async validateAuth(_parent, data, _context) {
    console.log("entra", data.email);
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
      include: {
        role_x_user: {
          select: {
            role: {
              select: {
                machine_name: true,
              },
            },
          },
        },
      },
    });
    console.log(user);
    if (!user) return false;
    if (hashPassword(data.password) !== user.password) return false;
    return this.prepareUser(user);
  },

  prepareUser(user) {
    const roles = user.role_x_user.flatMap((r) => r.role.machine_name);
    return {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      roles,
    };
  },
};
