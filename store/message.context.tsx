"use client";

import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

type ChildrenPropsType = {
  children: React.ReactNode;
};

export enum MESSAGE_TYPE {
  base = "base",
  success = "success",
  error = "error",
}

type ContextType = {
  message: string;
  type: MESSAGE_TYPE;
  setMessage: Dispatch<SetStateAction<string>>;
  setType: Dispatch<SetStateAction<MESSAGE_TYPE>>;
};

export const MessageContext = createContext<ContextType>({
  message: "",
  type: MESSAGE_TYPE.base,
  setMessage: () => {},
  setType: () => {},
});

export const MessageContextProvider = ({ children }: ChildrenPropsType) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState(MESSAGE_TYPE.base);

  const value = { message, setMessage, type, setType };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("");
        setType(MESSAGE_TYPE.base);
      }, 3000);
    }
  }, [message]);

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

export const useMessageContext = () => useContext(MessageContext);
