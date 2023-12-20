import Image from "next/image";

import BellLogo from "@/assets/notifications.svg";
import SubmitLogo from "@/assets/submit.svg";
import CrossLogo from "@/assets/cross.svg";
import SearchLogo from "@/assets/search.svg";

import "./Tabbar.style.scss";

const Tabbar = () => {
  return (
    <>
      <div className="tabbar">
        <div className="tabbar__search">
          <Image
            src={SearchLogo}
            className="tabbar__search-icon"
            alt="search logo"
            priority
          />
        </div>
        <div className="tabbar__submit">
          <Image
            className="tabbar__submit-icon tabbar__submit-icon-rectangle"
            src={SubmitLogo}
            alt="submit logo"
            priority
          />
          <Image
            className="tabbar__submit-icon tabbar__submit-icon-cross"
            src={CrossLogo}
            alt="closs logo"
            priority
          />
        </div>
        <div className="tabbar__notifications">
          <Image
            src={BellLogo}
            className="tabbar__notifications-icon"
            alt="bell logo"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Tabbar;
