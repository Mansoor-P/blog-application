export const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  return user !== null;
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
