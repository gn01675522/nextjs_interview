import AlbumReview from "@/components/AlbumReview/AlbumReview.component";
import Tabbar from "@/components/Tabbar/Tabbar.component";

import "./page.scss";

const AlbumPage = () => {
  return (
    <main className="album">
      <Tabbar />
      <div className="album__owner">
        <h1 className="album__owner-name">Leanne Graham</h1>
        <div className="album__owner-email">
          <span>icon</span>
          <div>Sincere@april.biz</div>
        </div>
      </div>
      <div className="album__list">
        <AlbumReview />
        <AlbumReview />
        <AlbumReview />
        <AlbumReview />
      </div>
    </main>
  );
};

export default AlbumPage;
