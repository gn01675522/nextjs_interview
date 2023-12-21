import Image from "next/image";

import CloseLogo from "@/assets/close.svg";
import DownloadLogo from "@/assets/download.svg";
import ArrowLogo from "@/assets/arrow.svg";
import InfoLogo from "@/assets/info.svg";
import LikeLogo from "@/assets/like.svg";
import SaveLogo from "@/assets/save.svg";

import "./Modal.style.scss";

const Modal = () => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal__header">
          <div className="modal__header-close">
            <Image src={CloseLogo} alt="close button" />
          </div>
          <div className="modal__header-function">
            <div className="modal__header-function-item">
              <span>Download</span>
              <Image src={DownloadLogo} alt="download logo" />
            </div>
            <div className="modal__header-function-item">
              <span>Share</span>
              <Image src={ArrowLogo} alt="arrow logo" />
            </div>
            <div className="modal__header-function-item">
              <span>Info</span>
              <Image src={InfoLogo} alt="info logo" />
            </div>
          </div>
        </div>
        <div className="modal__body">
          <img className="modal__body-img" />
        </div>
        <div className="modal__footer">
          <div className="modal__footer-function">
            <div className="modal__footer-function-item">
              <span>Like</span>
              <Image src={LikeLogo} alt="heart logo" />
            </div>
            <div className="modal__footer-function-item">
              <span>Save</span>
              <Image src={SaveLogo} alt="save logo" />
            </div>
          </div>
          <div className="modal__footer-title">
            <span>Title</span>
            <h1>accusamus beatae ad facilis cum similique qui sunt</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
