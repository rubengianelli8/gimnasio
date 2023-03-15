import { prisma } from "@/prisma/client";
import { error } from "@/models/error";

export const Location = {
  async getCountries(_parent, data, _context) {
    try {
      return await prisma.country.findMany({});
    } catch (e) {
      return error.getError(e);
    }
  },
  async getCities(_parent, data, _context) {
    try {
      return await prisma.city.findMany({
        where: {
          countryId: data.id_country,
        },
      });
    } catch (e) {
      return error.getError(e);
    }
  },
};
