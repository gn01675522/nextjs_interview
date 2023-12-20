import Image from "next/image";

import { AlbumPhotosType } from "../AlbumReview/AlbumReview.component";

import "./ImgCard.style.scss";

type PropsType = {
  photoData: AlbumPhotosType;
};

const ImgCard = ({ photoData }: PropsType) => {
  const { title, url } = photoData;

  return (
    <div className="img-card">
      <Image
        className="img-card__img"
        src={url}
        alt={title}
        sizes="290px,(min-width: 768px) 350px, (min-width: 1024px) 455px"
        fill
      />
    </div>
  );
};

export default ImgCard;
