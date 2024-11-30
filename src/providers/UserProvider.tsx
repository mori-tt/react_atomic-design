import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const contextName = "morimoli";
  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
