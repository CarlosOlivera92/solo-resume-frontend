import { UserState } from "@/Data/Interfaces/User";
import { createContext, useContext } from "react";

// Creamos un contexto para almacenar el username
const UserContext = createContext<{
  user: UserState | null;
  setUser: React.Dispatch<React.SetStateAction<UserState | null>>;
}>({
  user: null,
  setUser: () => null,
});

// Hook personalizado para utilizar el contexto
const useUser = () => {
  return useContext(UserContext);
};

export { UserContext, useUser };
