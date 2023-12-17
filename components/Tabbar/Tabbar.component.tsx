import "./Tabbar.style.scss";

const Tabbar = () => {
  return (
    <>
      <div className="tabbar">
        <div className="tabbar__search">search</div>
        <div className="tabbar__submit">submit</div>
        <div className="tabbar__bell">bell</div>
      </div>
      <div className="tabbar__blocker"></div>
    </>
  );
};

export default Tabbar;
