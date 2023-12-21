"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import ImgCard from "@/components/ImgCard/ImgCard.component";
import { AlbumPhotosType } from "@/components/AlbumReview/AlbumReview.component";

import { apiUserAlbumDetail } from "@/lib/api";
import { useUserContext } from "@/store/user.context";
import { useAlbumContext } from "@/store/album.context";

import "./page.scss";

const AlbumDetailPage = () => {
  const [albumPhotos, setAlbumPhotos] = useState<AlbumPhotosType[]>([]);
  const { user } = useUserContext();
  const { albumList } = useAlbumContext();
  const params = useParams();
  const router = useRouter();

  const albumInfo = albumList.filter(
    (album) => album.id === Number(params.id)
  )[0];

  useEffect(() => {
    if (user.id === 0) {
      router.push("/login");
    } else {
      fetch(apiUserAlbumDetail(Number(params.id)))
        .then((res) => res.json())
        .then((data) => setAlbumPhotos(data))
        .catch((e) => console.log(e));
    }
  }, [params, user.id, router]);

  return (
    <main className="album-detail">
      <h1 className="album-detail__title">{albumInfo?.title}</h1>
      <div className="album-detail__list">
        {albumPhotos.map((photos) => (
          <ImgCard key={photos.id} photoData={photos} />
        ))}
      </div>
    </main>
  );
};

export default AlbumDetailPage;
