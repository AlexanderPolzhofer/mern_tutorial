import React from "react";

export interface UserData {
  _id?: string;
  userName: string;
  password?: string;
  email?: string;
}

export type UserContextType = {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
};

const UserContext = React.createContext<UserContextType | null>(null);

interface UserContextProviderProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCurrentUserContext = () => {
  const userContext = React.useContext(UserContext);

  if (userContext === undefined || userContext === null) {
    throw new Error("User is undefined or null.");
  }
  return userContext;
};

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = React.useState<UserData | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
