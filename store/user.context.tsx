"use client";

import { useState, Dispatch, SetStateAction, useContext } from "react";
import { createContext } from "react";

type ChildrenProps = {
  children: JSX.Element;
};

type HasAlbumType = {
  albumId: number;
  title: string;
};

type ContextType = {
  userId: number;
  setUserId: Dispatch<SetStateAction<number>>;
  hasAlbum: HasAlbumType[];
  setHasAlbum: Dispatch<SetStateAction<HasAlbumType[]>>;
};

// 整體流程大約是當 user 登入後
// 其 id 會被紀錄在 userId 這邊
// 後續會根據 jsonplaceholder 提供的 api 打看看相對應的 albumId 有哪些
// 接著一併存在 hasAlbum
export const UserContext = createContext<ContextType>({
  userId: 0,
  setUserId: () => {},
  hasAlbum: [],
  setHasAlbum: () => {},
});

export const UserContextProvider = ({ children }: ChildrenProps) => {
  const [userId, setUserId] = useState(0);
  const [hasAlbum, setHasAlbum] = useState<[] | HasAlbumType[]>([]);

  const value = { userId, setUserId, hasAlbum, setHasAlbum };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
