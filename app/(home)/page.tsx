import AlbumReview from "@/components/AlbumReview/AlbumReview.component";

import "./page.scss";

const HomePage = () => {
  return (
    <main className="home">
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
    </main>
  );
};

export default HomePage;
