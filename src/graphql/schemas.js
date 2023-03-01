import { DateTimeTypeDefinition } from "graphql-scalars";
import { user } from "./user";
import { gym } from "./gym";
import { city } from "./city";
import { country } from "./country";
export const schemas = [
  DateTimeTypeDefinition,
  user.schema,
  city.schema,
  country.schema,
  gym.schema,
];
