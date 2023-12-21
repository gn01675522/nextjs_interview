"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AlbumReview from "@/components/AlbumReview/AlbumReview.component";

import ArrowLogo from "@/assets/arrow.svg";

import { useUserContext } from "@/store/user.context";
import { useAlbumContext } from "@/store/album.context";

import "./page.scss";
import Image from "next/image";
import Modal from "@/components/Modal/Modal.component";

const HomePage = () => {
  const { user } = useUserContext();
  const { name, email } = user;

  const { albumList } = useAlbumContext();

  const router = useRouter();

  // context 預設 userId 為 0，jsonplaceholder 第一個 userId 為 1
  // 如果沒有登入，也就是當 userId 為 0 時就進來，那麼就將其導向到 login 頁面來做登入動作
  useEffect(() => {
    if (user.id === 0) {
      router.push("/login");
      return;
    }
  }, [user.id, router]);

  return (
    <>
      <Modal />
      <div className="home">
        <div className="home__owner">
          <h1 className="home__owner-name">{name}</h1>
          <div className="home__owner-email">
            <div className="home__owner-email-wrapper">
              <Image
                className="home__owner-email-wrapper-icon"
                src={ArrowLogo}
                alt="arrow logo"
              />
            </div>
            <h2>{email}</h2>
          </div>
        </div>
        <div className="home__list">
          {albumList.map((album) => (
            <AlbumReview key={album.id} album={album} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
