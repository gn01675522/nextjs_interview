import { createPortal } from "react-dom";

import Modal from "./Modal.component";

const portalElement = document.getElementById("overlays");

type ChildrenPropsType = {
  children: JSX.Element;
};

const ModalPortal = ({ children }: ChildrenPropsType) => {
  if (!portalElement) return null;
  return <>{createPortal(<Modal>{children}</Modal>, portalElement)}</>;
};

export default ModalPortal;
