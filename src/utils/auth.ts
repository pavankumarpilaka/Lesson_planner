export const login = (username: string, password: string) => {
    localStorage.setItem("user", username);
    return true;
  };
  
  export const logout = () => {
    localStorage.removeItem("user");
  };
  
  export const isAuthenticated = () => {
    return localStorage.getItem("user") !== null;
  };
  