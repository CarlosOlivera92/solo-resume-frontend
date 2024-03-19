import { ReactNode, useState } from "react";
import { UserContext } from "./userContext";
import { UserState } from "@/Data/Interfaces/User";
interface IUserProviderProps {
  children: ReactNode;
}
const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<UserState | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider };
