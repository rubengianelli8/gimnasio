export const isAdmin = (user) => {
  if (user.admin && user.roles.includes("admin")) return true;
  return false;
};

export const isSuperAdmin = (user) => {
  if (user.admin && user.roles.includes("superadmin")) return true;
  return false;
};
