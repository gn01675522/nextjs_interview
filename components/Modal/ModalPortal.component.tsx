import { createPortal } from "react-dom";

import Modal from "./Modal.component";

const portalElement = document.getElementById("overlays");

const ModalPortal = () => {
  if (!portalElement) return null;
  return <>{createPortal(<Modal />, portalElement)}</>;
};

export default ModalPortal;
