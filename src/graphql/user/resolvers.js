import { User } from "@/models/user";

export const resolvers = {
  Query: {
    getUser: async (_parent, _args, _context) => {
      return await User.getUser(_parent, _args, _context);
    },
    getUserList: async (_parent, _args, _context) => {
      return await User.getUserList(_parent, _args, _context);
    },
  },
  Mutation: {
    addUser: async (_parent, _args, _context) => {
      return await User.addUser(_parent, _args, _context);
    },
    updateUser: async (_parent, _args, _context) => {
      return await User.updateUser(_parent, _args, _context);
    },
  },
};
