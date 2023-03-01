import { merge } from "lodash";
import { DateTimeResolver } from "graphql-scalars";
import { user } from "./user";
import { gym } from "./gym";

export const resolvers = merge(
  { DateTime: DateTimeResolver },
  user.resolvers,
  gym.resolvers
);
