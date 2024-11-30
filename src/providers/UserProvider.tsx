import { createContext, useState } from "react";

type UserContextType = {
  userInfo: { isAdmin: boolean } | null;
  setUserInfo: (userInfo: { isAdmin: boolean }) => void;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState<{ isAdmin: boolean } | null>(null);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
