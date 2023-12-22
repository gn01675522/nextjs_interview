import Image from "next/image";

import CloseLogo from "@/assets/close.svg";
import DownloadLogo from "@/assets/download.svg";
import ArrowLogo from "@/assets/arrow.svg";
import InfoLogo from "@/assets/info.svg";
import LikeLogo from "@/assets/like.svg";
import FlagLogo from "@/assets/flag.svg";

import { useModalContext } from "@/store/modal.context";

import "./Modal.style.scss";
import { useEffect } from "react";

const Modal = () => {
  const { isModalOpen, setIsModalOpen, tempData } = useModalContext();

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

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
      <div className="modal">
        <div className="modal__header">
          <div className="modal__header-close" onClick={onCloseModal}>
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
          <div className="modal__body-wrapper">
            <Image
              className="modal__body-img"
              src={tempData.url}
              alt={`image: ${tempData.title}`}
              sizes="100%, (min-width: 1920px) 30%"
              fill
              priority
            />
          </div>
        </div>
        <div className="modal__footer">
          <div className="modal__footer-function">
            <div className="modal__footer-function-item">
              <span>Like</span>
              <Image src={LikeLogo} alt="heart logo" />
            </div>
            <div className="modal__footer-function-item">
              <span>Save</span>
              <Image src={FlagLogo} alt="save logo" />
            </div>
          </div>
          <div className="modal__footer-title">
            <span>Title</span>
            <h1>{tempData.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
