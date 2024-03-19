import { useContext } from "react";
import { AuthContext } from "../context/authProvider";
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
export { useAuth };
