"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { apiUserLogin } from "@/lib/api";
import { useUserContext } from "@/store/user.context";
import { useMessageContext, MESSAGE_TYPE } from "@/store/message.context";
import Message from "@/components/Message/Message.component";

import "./page.scss";

const LoginPage = () => {
  const [inputValue, setInputValue] = useState("");
  const { user, setUser } = useUserContext();
  const { message, setMessage, setType } = useMessageContext();
  const router = useRouter();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onLoginHandler = async () => {
    try {
      // 由於 input 裡面的是字串，但是 jsonplaceholder api 提供的 id 是 number，
      // 所以這邊的 userId 做個類型轉換
      const res = await fetch(apiUserLogin(Number(inputValue)));

      // jsonplaceholder api 會回傳一個 ok 的值，
      // 如果請求失敗或錯誤就會 false 反之則為 true
      if (res.ok === false) {
        setType(MESSAGE_TYPE.error);
        setMessage("找不到 USER ID");
      } else {
        const data = await res.json();
        setUser({ id: data.id, name: data.name, email: data.email });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (user.id !== 0) {
      router.push("/");
    }
  }, [user.id, router]);

  return (
    <>
      {message && <Message />}
      <main className="login">
        <div className="login__body">
          <div className="login__body-group">
            <input
              placeholder="UserID"
              className="login__body-group-input"
              value={inputValue}
              onChange={onChangeInputValue}
            />
            <button onClick={onLoginHandler}>Log in</button>
            <p className="login__body-group-para">Don’t have an account?</p>
            <div className="login__body-group-func">
              <button>Register</button>
              <button>Google</button>
            </div>
          </div>
        </div>
        <footer className="login__footer">
          <span>ALL RIGHT RESERVED.</span>
          <span>CONTENT PRIVACY</span>
        </footer>
      </main>
    </>
  );
};

export default LoginPage;
