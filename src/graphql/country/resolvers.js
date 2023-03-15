import { Location } from "@/models/location";

export const resolvers = {
  Query: {
    getCountries: async (_parent, _args, _context) => {
      console.log("llega aca....");
      return await Location.getCountries(_parent, _args, _context);
    },
  },
};
