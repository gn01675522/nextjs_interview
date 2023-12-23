import Image from "next/image";

import Modal from "../Modal.component";

import CloseLogo from "@/assets/close.svg";
import DownloadLogo from "@/assets/download.svg";
import ArrowLogo from "@/assets/arrow.svg";
import InfoLogo from "@/assets/info.svg";
import FlagLogo from "@/assets/flag.svg";
import LikeLogo from "@/assets/like.svg";

import { useModalContext } from "@/store/modal.context";

import "./PopUp.style.scss";

const PopUp = () => {
  const { setIsModalOpen, tempData } = useModalContext();

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal>
      <div className="popup">
        <div className="popup__header">
          <div className="popup__header-close" onClick={onCloseModal}>
            <Image src={CloseLogo} alt="close button" />
          </div>
          <div className="popup__header-function">
            <div className="popup__header-function-item">
              <span>Download</span>
              <Image src={DownloadLogo} alt="download logo" />
            </div>
            <div className="popup__header-function-item">
              <span>Share</span>
              <Image src={ArrowLogo} alt="arrow logo" />
            </div>
            <div className="popup__header-function-item">
              <span>Info</span>
              <Image src={InfoLogo} alt="info logo" />
            </div>
          </div>
        </div>
        <div className="popup__body">
          <div className="popup__body-wrapper">
            <Image
              className="popup__body-img"
              src={tempData.url}
              alt={`image: ${tempData.title}`}
              sizes="100%, (min-width: 1920px) 30%"
              fill
              priority
            />
          </div>
        </div>
        <div className="popup__footer">
          <div className="popup__footer-function">
            <div className="popup__footer-function-item">
              <span>Like</span>
              <Image src={LikeLogo} alt="heart logo" />
            </div>
            <div className="popup__footer-function-item">
              <span>Save</span>
              <Image src={FlagLogo} alt="save logo" />
            </div>
          </div>
          <div className="popup__footer-title">
            <span>Title</span>
            <h1>{tempData.title}</h1>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
