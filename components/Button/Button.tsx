import "./Button.scss";

//* 整合所有 button 的類型
//* 若後續有需要修改樣式的需求，就直接來這邊查找並修改
//* 這邊直接 export 這個 enum，讓各個 component 可以引用
//* 不但方便，且可利用 IDE 的自動選擇，
//* 來避免後續因樣式擴大而導致的打字錯誤
export enum BUTTON_TYPE_CLASSES {
  base = "base",
  black = "black",
  close = "close",
  search = "search",
}

//* 透過 props 傳回的 buttonType，並透過 computed properties
//* 來 return 出相對應的字串，並將其設立為 class
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: "button__base",
    [BUTTON_TYPE_CLASSES.black]: "button__black",
    [BUTTON_TYPE_CLASSES.close]: "button__close",
    [BUTTON_TYPE_CLASSES.search]: "button__search",
  }[buttonType]);

type ChildrenProps = {
  children: string | JSX.Element;
  buttonType?: BUTTON_TYPE_CLASSES;
};

const Button = ({ children, buttonType }: ChildrenProps) => {
  const CustomButton = getButton(buttonType);

  return <button className={CustomButton}>{children}</button>;
};

export default Button;
