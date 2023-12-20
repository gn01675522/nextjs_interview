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

type HasAlbumType = {
  id: number;
  title: string;
  userId: number;
};

type ContextType = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
  hasAlbum: HasAlbumType[];
  setHasAlbum: Dispatch<SetStateAction<HasAlbumType[]>>;
};

export const UserContext = createContext<ContextType>({
  user: {
    id: 0,
    name: "",
    email: "",
  },
  setUser: () => {},
  hasAlbum: [],
  setHasAlbum: () => {},
});

export const UserContextProvider = ({ children }: ChildrenPropsType) => {
  const [user, setUser] = useState<UserType>({
    id: 0,
    name: "",
    email: "",
  });
  const [hasAlbum, setHasAlbum] = useState<[] | HasAlbumType[]>([]);

  const value = { user, setUser, hasAlbum, setHasAlbum };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
