export const isAdmin = (user) => {
  if (user.admin && user.roles.includes("admin")) return true;
  return false;
};
