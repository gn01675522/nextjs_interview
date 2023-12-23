import { useEffect } from "react";
import { useModalContext } from "@/store/modal.context";

import "./Modal.style.scss";

type ChildrenPropsType = {
  children: React.ReactNode;
};

const Modal = ({ children }: ChildrenPropsType) => {
  const { isModalOpen } = useModalContext();

  // 開啟 modal 時，為 body 加上 modal--on 的 class
  // 這樣就可以防止背景出現滾動條
  useEffect(() => {
    document.body.classList.add("modal--on");
    return () => {
      document.body.classList.remove("modal--on");
    };
  }, []);

  return (
    <div className={`modal-backdrop ${isModalOpen ? "modal--on" : ""}`}>
      {children}
    </div>
  );
};

export default Modal;
