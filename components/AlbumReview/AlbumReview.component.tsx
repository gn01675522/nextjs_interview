import ImgCard from "../ImgCard/ImgCard.component";
import "./AlbumReview.style.scss";

const AlbumReview = () => {
  return (
    <div className="album-review">
      <div className="album-review__title">
        <span>icon</span>
        <h3>quidem molestiae enim</h3>
      </div>
      <ul className="album-review__list">
        <li>
          <ImgCard />
        </li>
        <li>
          <ImgCard />
        </li>
        <li>
          <ImgCard />
        </li>
        <li>
          <ImgCard />
        </li>
      </ul>
    </div>
  );
};

export default AlbumReview;
