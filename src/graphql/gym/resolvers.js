import { Gym } from "@/models/gym";

export const resolvers = {
  Query: {
    getGymList: async (_parent, _args, _context) => {
      return await Gym.getGymList(_parent, _args, _context);
    },
  },
  Mutation: {
    addGym: async (_parent, _args, _context) => {
      return await Gym.addGym(_parent, _args, _context);
    },
  },
};
