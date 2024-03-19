import { createContext, useState, ReactNode } from "react"; // Importa ReactNode para tipar children
import { useApi } from "../api/useApi";
import { ILoginContextProps } from "@/Data/Interfaces/Login";
import { IConfigProps } from "@/Data/Interfaces/Api";

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<{
  isAuthenticated: boolean;
  login: (data: ILoginContextProps) => void;
  logout: () => Promise<boolean>;
}>({
  isAuthenticated: false,
  login: () => {},
  logout: async () => false,
});

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem("token"),
  ); // Especifica el tipo como boolean
  const config: IConfigProps = {
    httpVerb: "POST",
  };
  const apiEndpoint = "http://localhost:8080/api/auth/logout";
  const { request } = useApi();

  const login = ({ token, username, refreshToken }: ILoginContextProps) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("refreshToken", refreshToken);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
      const response = await request({ apiEndpoint, config, isAuthenticated });
      if (!response.ok) {
        throw new Error("Failed to logout");
      }
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("refreshToken");
      setIsAuthenticated(false);
      return true;
    } catch (error) {
      console.error("Error during logout:", error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
