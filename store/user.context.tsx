"use client";

import { useState, Dispatch, SetStateAction, useContext } from "react";
import { createContext } from "react";

type ChildrenPropsType = {
  children: React.ReactNode;
};

type UserType = {
  id: number;
  name: string;
  email: string;
};

type ContextType = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
};

export const UserContext = createContext<ContextType>({
  user: {
    id: 0,
    name: "",
    email: "",
  },
  setUser: () => {},
});

export const UserContextProvider = ({ children }: ChildrenPropsType) => {
  const [user, setUser] = useState<UserType>({
    id: 0,
    name: "",
    email: "",
  });

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
