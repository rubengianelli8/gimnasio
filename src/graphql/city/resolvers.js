import { Location } from "@/models/location";

export const resolvers = {
  Query: {
    getCities: async (_parent, _args, _context) => {
      return await Location.getCities(_parent, _args, _context);
    },
  },
};
