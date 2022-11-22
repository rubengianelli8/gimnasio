import { pbkdf2Sync } from "pbkdf2";
export default class CustomError extends Error {
  constructor(code, ...params) {
    super(...params);
    this.name = "CustomError";
    this.code = code;
  }
}

export const hashPassword = (password) => {
  let newPassword = pbkdf2Sync(password, "salteo", 100, 32, "sha256");
  newPassword = newPassword.toString("hex");
  return newPassword;
};

export const generateToken = (id) => {
  const hash = pbkdf2Sync(id.toString(), "code", 150000, 10, "sha256");
  const token = hash.toString("hex");
  return token;
};
