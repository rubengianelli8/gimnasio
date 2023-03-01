import { Gym } from "@/models/gym";

export const resolvers = {
  Mutation: {
    addGym: async (_parent, _args, _context) => {
      return await Gym.addGym(_parent, _args, _context);
    },
  },
};
