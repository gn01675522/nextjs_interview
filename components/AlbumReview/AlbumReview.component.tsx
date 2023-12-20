import { useState, useEffect } from "react";

import ImgCard from "../ImgCard/ImgCard.component";

import { apiUserAlbumDetail } from "@/lib/api";

import "./AlbumReview.style.scss";
import Link from "next/link";

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
  const { id, title } = album;

  const showTopFourPhotos = albumPhotos.slice(0, 4);

  useEffect(() => {
    if (album) {
      fetch(apiUserAlbumDetail(album.id))
        .then((res) => res.json())
        .then((data) => setAlbumPhotos(data))
        .catch((e) => console.log(e));
    }
  }, [album]);

  return (
    <div className="album-review">
      <Link className="album-review__title" href={`/album/${id}`}>
        <span>icon</span>
        <h3>{title}</h3>
      </Link>
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
