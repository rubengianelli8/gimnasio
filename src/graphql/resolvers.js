import { merge } from "lodash";
import { DateTimeResolver } from "graphql-scalars";
import { user } from "./user";

export const resolvers = merge({ DateTime: DateTimeResolver }, user.resolvers);
