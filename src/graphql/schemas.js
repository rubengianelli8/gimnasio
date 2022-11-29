import { DateTimeTypeDefinition } from "graphql-scalars";
import { user } from "./user";

export const schemas = [DateTimeTypeDefinition, user.schema];
