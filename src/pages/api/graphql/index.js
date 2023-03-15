import { ApolloServer } from "apollo-server-micro";
import { getSession } from "next-auth/react";

import { resolvers } from "@/graphql/resolvers";
import { schemas } from "@/graphql/schemas";
import { getToken } from "next-auth/jwt";

const apolloServer = new ApolloServer({
  cors: { origin: "*", credentials: true },
  typeDefs: schemas,
  resolvers: resolvers,

  context: async ({ req, res }) => {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    const context = {
      req,
      res,
      user: {},
    };

    const user = session ? session : null;
    console.log("user", user);

    if (!user?.error) {
      context.user = user;
    }

    return context;
  },
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
