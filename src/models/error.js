import { ApolloError } from "apollo-server-micro";
import { Prisma } from "@prisma/client";
//import { logger } from "@/utils/logger";

export const error = {
  prismaValidationError(error) {
    if (error instanceof Prisma.PrismaClientValidationError)
      return {
        type: "PrismaClientValidationError",
        message: "Data validation error",
        code: "P2007",
      };

    if (error instanceof Prisma.PrismaClientKnownRequestError)
      return {
        type: "PrismaClientKnownRequestError",
        message: error.meta.cause,
        code: error.code,
      };

    if (error instanceof Prisma.PrismaClientUnknownRequestError)
      return {
        type: "PrismaClientUnknownRequestError",
        message: error.message,
        code: "P01",
      };

    if (error instanceof Prisma.PrismaClientRustPanicError)
      return {
        type: "PrismaClientRustPanicError",
        message: error.message,
        code: "P01",
      };

    if (error instanceof Prisma.PrismaClientInitializationError)
      return {
        type: "PrismaClientInitializationError",
        message: error.message,
        code: error.errorCode,
      };

    return false;
  },
  logError(type, code, message, originalError) {
    let newMessage = `${type}: ${code} - ${message}`;
    logger.error(newMessage);
  },
  getError(error) {
    const prismaError = this.prismaValidationError(error);
    if (prismaError) {
      const { message, type, code } = prismaError;
      this.handlerError(message, code, type, error);
    }

    if (error.code) {
      const { message, type, code } = error;
      this.handlerError(message, code, { type } || null, error);
    }

    const { message, code, type } = error;
    return this.handlerError(message, code, type, error);
  },
  handlerError(message, code, type, originalError) {
    /*     process.env.NODE_ENV !== "test" &&
      this.logError(type, code, message, originalError.message); */
    //retorno de error que maneja el handler
    //throw { code, message };
    // Si se implementa graphql, vamos a retornar un error de apollo.
    if (process.env.NODE_ENV === "test") throw { code, message };
    return new ApolloError(message, code, { type });
  },
};
