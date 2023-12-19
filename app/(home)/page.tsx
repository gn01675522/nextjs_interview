"use client";

import { useRouter } from "next/navigation";
import AlbumReview from "@/components/AlbumReview/AlbumReview.component";

import { useUserContext } from "@/store/user.context";

import "./page.scss";
import { useEffect } from "react";

const HomePage = () => {
  const { userId } = useUserContext();
  const router = useRouter();

  // context 預設 userId 為 0，jsonplaceholder 第一個 userId 為 1
  // 如果沒有登入，也就是當 userId 為 0 時就進來，那麼就將其導向到 login 頁面來做登入動作
  useEffect(() => {
    if (userId === 0) {
      router.push("/login");
    }
  }, [userId, router]);

  return (
    <div className="home">
      <div className="home__owner">
        <h1 className="home__owner-name">Leanne Graham</h1>
        <div className="home__owner-email">
          <span>icon</span>
          <div>Sincere@april.biz</div>
        </div>
      </div>
      <div className="home__list">
        <AlbumReview />
        <AlbumReview />
        <AlbumReview />
        <AlbumReview />
      </div>
    </div>
  );
};

export default HomePage;
