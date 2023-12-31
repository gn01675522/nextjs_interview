"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import ImgCard from "@/components/ImgCard/ImgCard.component";
import PopUp from "@/components/Modal/PopUp/PopUp.component";

import { AlbumPhotosType } from "@/components/AlbumReview/AlbumReview.component";

import { apiUserAlbumDetail } from "@/lib/api";
import { useUserContext } from "@/store/user.context";
import { useAlbumContext } from "@/store/album.context";
import { useModalContext } from "@/store/modal.context";

import "./page.scss";

const AlbumDetailPage = () => {
  const [albumPhotos, setAlbumPhotos] = useState<AlbumPhotosType[]>([]);
  const { user } = useUserContext();
  const { albumList } = useAlbumContext();
  const { isModalOpen } = useModalContext();
  const params = useParams();
  const router = useRouter();

  const albumInfo = albumList.filter(
    (album) => album.id === Number(params.id)
  )[0];

  useEffect(() => {
    if (user.id === 0) {
      router.push("/login");
      return;
    } else {
      const fetchAlbumPhotos = async () => {
        try {
          const res = await fetch(apiUserAlbumDetail(Number(params.id)));
          const data = await res.json();
          setAlbumPhotos(data);
        } catch (e) {
          console.log(e);
        }
      };
      fetchAlbumPhotos();
    }
  }, [params, user.id, router]);

  return (
    <>
      {isModalOpen && <PopUp />}
      <main className="album-detail">
        <h1 className="album-detail__title">{albumInfo?.title}</h1>
        <div className="album-detail__list">
          <div className="album-detail__list-wrapper">
            {albumPhotos.map((photos) => (
              <ImgCard key={photos.id} photoData={photos} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default AlbumDetailPage;
