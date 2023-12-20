import { useState, useEffect } from "react";

import ImgCard from "../ImgCard/ImgCard.component";

import { apiUserAlbumDetail } from "@/lib/api";

import "./AlbumReview.style.scss";

type AlbumType = {
  id: number;
  title: string;
  userId: number;
};

type PropsType = {
  album: AlbumType;
};

export type AlbumPhotosType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const AlbumReview = ({ album }: PropsType) => {
  const [albumPhotos, setAlbumPhotos] = useState<AlbumPhotosType[]>([]);
  const showTopFourPhotos = albumPhotos.slice(0, 4);

  useEffect(() => {
    if (album.id) {
      fetch(apiUserAlbumDetail(album.id))
        .then((res) => res.json())
        .then((data) => setAlbumPhotos(data))
        .catch((e) => console.log(e));
    }
  }, [album]);

  return (
    <div className="album-review">
      <div className="album-review__title">
        <span>icon</span>
        <h3>{album.title}</h3>
      </div>
      <ul className="album-review__list">
        {showTopFourPhotos.map((photo) => (
          <li key={photo.id}>
            <ImgCard photoData={photo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumReview;
