"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

import { useUserContext } from "./user.context";

import { apiUserAlbumList } from "@/lib/api";

type ChildrenPropsType = {
  children: React.ReactNode;
};

type AlbumListType = {
  id: number;
  title: string;
  userId: number;
};

type ContextType = {
  albumList: AlbumListType[];
  setAlbumList: Dispatch<SetStateAction<AlbumListType[]>>;
};

export const AlbumContext = createContext<ContextType>({
  albumList: [],
  setAlbumList: () => {},
});

export const AlbumContextProvider = ({ children }: ChildrenPropsType) => {
  const [albumList, setAlbumList] = useState<[] | AlbumListType[]>([]);
  const { user } = useUserContext();

  const value = { albumList, setAlbumList };

  useEffect(() => {
    if (user.id !== 0) {
      fetch(apiUserAlbumList(user.id))
        .then((res) => res.json())
        .then((data) => setAlbumList([...data]))
        .catch((e) => console.log(e));
    }
  }, [user.id]);

  return (
    <AlbumContext.Provider value={value}>{children}</AlbumContext.Provider>
  );
};

export const useAlbumContext = () => useContext(AlbumContext);
