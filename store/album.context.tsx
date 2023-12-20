import { createContext, useContext } from "react";

type ChildrenPropsType = {
  children: React.ReactNode;
};

type AlbumListType = {};

type AlbumPhotosType = {};

export const AlbumContext = createContext({
  albumList: [],
  albumPhotos: [],
});

export const AlbumContextProvider = ({ children }: ChildrenPropsType) => {
  return <AlbumContext.Provider value={""}></AlbumContext.Provider>;
};

export const useAlbumContext = () => useContext(AlbumContext);
