"use client";

import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type ChildrenPropsType = {
  children: React.ReactNode;
};

type TempDataType = {
  title: string;
  url: string;
};

type ContextType = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  tempData: TempDataType;
  setTempData: Dispatch<SetStateAction<TempDataType>>;
};

export const ModalContext = createContext<ContextType>({
  isModalOpen: false,
  setIsModalOpen: () => {},
  tempData: {
    title: "",
    url: "",
  },
  setTempData: () => {},
});

export const ModalContextProvider = ({ children }: ChildrenPropsType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempData, setTempData] = useState<TempDataType>({
    title: "",
    url: "",
  });

  const value = { isModalOpen, setIsModalOpen, tempData, setTempData };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
