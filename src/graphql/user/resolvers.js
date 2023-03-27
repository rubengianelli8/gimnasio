import { error } from "@/models/error";
import { User } from "@/models/user";

export const resolvers = {
  Query: {
    getUser: async (_parent, _args, _context) => {
      try {
        return await User.getUser(_parent, _args, _context);
      } catch (e) {
        return error.getError(e, false);
      }
    },
    getUserList: async (_parent, _args, _context) => {
      try {
        return await User.getUserList(_parent, _args, _context);
      } catch (e) {
        return error.getError(e, false);
      }
    },
  },
  Mutation: {
    addUser: async (_parent, _args, _context) => {
      try {
        return await User.addUser(_parent, _args, _context);
      } catch (e) {
        return error.getError(e, false);
      }
    },
    updateUser: async (_parent, _args, _context) => {
      try {
        return await User.updateUser(_parent, _args, _context);
      } catch (e) {
        return error.getError(e, false);
      }
    },
  },
};
