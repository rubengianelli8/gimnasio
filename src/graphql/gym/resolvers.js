import { error } from "@/models/error";
import { Gym } from "@/models/gym";

export const resolvers = {
  Query: {
    getGymList: async (_parent, _args, _context) => {
      try {
        return await Gym.getGymList(_parent, _args, _context);
      } catch (e) {
        return error.getError(e, false);
      }
    },
    getGym: async (_parent, _args, _context) => {
      try {
        return await Gym.getGym(_parent, _args, _context);
      } catch (e) {
        return error.getError(e, false);
      }
    },
  },
  Mutation: {
    addGym: async (_parent, _args, _context) => {
      try {
        return await Gym.addGym(_parent, _args, _context);
      } catch (e) {
        return error.getError(e, false);
      }
    },
    updateGym: async (_parent, _args, _context) => {
      try {
        return await Gym.updateGym(_parent, _args, _context);
      } catch (e) {
        return error.getError(e, false);
      }
    },
    deleteGym: async (_parent, _args, _context) => {
      try {
        return await Gym.deleteGym(_parent, _args, _context);
      } catch (e) {
        return error.getError(e, false);
      }
    },
  },
};
