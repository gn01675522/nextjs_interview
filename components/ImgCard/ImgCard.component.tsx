"use client";

import Image from "next/image";

import { AlbumPhotosType } from "../AlbumReview/AlbumReview.component";
import { useModalContext } from "@/store/modal.context";

import "./ImgCard.style.scss";

type PropsType = {
  photoData: AlbumPhotosType;
};

const ImgCard = ({ photoData }: PropsType) => {
  const { setIsModalOpen, setTempData } = useModalContext();
  const { title, url } = photoData;

  const onOpenModal = () => {
    setTempData({ title, url });
    setIsModalOpen(true);
  };

  return (
    <div className="img-card">
      <Image
        className="img-card__img"
        src={url}
        alt={title}
        width={600}
        height={600}
        onClick={onOpenModal}
      />
    </div>
  );
};

export default ImgCard;
