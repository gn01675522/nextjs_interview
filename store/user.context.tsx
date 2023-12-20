"use client";

import { useState, Dispatch, SetStateAction, useContext } from "react";
import { createContext } from "react";

type ChildrenProps = {
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

// 整體流程大約是當 user 登入後
// 其 id 會被紀錄在 userId 這邊
// 後續會根據 jsonplaceholder 提供的 api 打看看相對應的 albumId 有哪些
// 接著一併存在 hasAlbum
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

export const UserContextProvider = ({ children }: ChildrenProps) => {
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
