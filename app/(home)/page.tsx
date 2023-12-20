"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AlbumReview from "@/components/AlbumReview/AlbumReview.component";

import { useUserContext } from "@/store/user.context";

import "./page.scss";

const HomePage = () => {
  const { user, hasAlbum } = useUserContext();
  const router = useRouter();

  const { name, email } = user;

  // context 預設 userId 為 0，jsonplaceholder 第一個 userId 為 1
  // 如果沒有登入，也就是當 userId 為 0 時就進來，那麼就將其導向到 login 頁面來做登入動作
  useEffect(() => {
    if (user.id === 0) {
      router.push("/login");
    }
  }, [user.id, router]);

  return (
    <div className="home">
      <div className="home__owner">
        <h1 className="home__owner-name">{name}</h1>
        <div className="home__owner-email">
          <span>icon</span>
          <div>{email}</div>
        </div>
      </div>
      <div className="home__list">
        {hasAlbum.map((album) => (
          <AlbumReview key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
