import { merge } from "lodash";
import { DateTimeResolver } from "graphql-scalars";
import { user } from "./user";
import { gym } from "./gym";
import { city } from "./city";
import { country } from "./country";

export const resolvers = merge(
  { DateTime: DateTimeResolver },
  user.resolvers,
  gym.resolvers,
  country.resolvers,
  city.resolvers
);
