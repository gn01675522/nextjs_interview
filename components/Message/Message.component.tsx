import Image from "next/image";
import { useMessageContext } from "@/store/message.context";

import CloseLogo from "@/assets/close.svg";

import "./Message.style.scss";

const Message = () => {
  const { message, setMessage, type } = useMessageContext();

  const onCloseMessage = () => {
    setMessage("");
  };

  return (
    <div className={`message ${type === "base" ? "" : `message--${type}`}`}>
      <div className="message__close" onClick={onCloseMessage}>
        <Image src={CloseLogo} alt="close logo" />
      </div>
      <p className="message__para">{message}</p>
    </div>
  );
};

export default Message;
