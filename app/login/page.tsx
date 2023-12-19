"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Button, {
  BUTTON_TYPE_CLASSES,
} from "@/components/Button/Button.component";

import { apiUserLogin } from "@/lib/api";
import { useUserContext } from "@/store/user.context";

import "./page.scss";

const LoginPage = () => {
  const [inputValue, setInputValue] = useState("");
  const { userId, setUserId } = useUserContext();
  const router = useRouter();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onLoginHandler = async () => {
    try {
      // 由於 input 裡面的是字串，但是 jsonplaceholder api 提供的 id 是 number，
      // 所以這邊的 userId 做個類型轉換
      const res = await fetch(apiUserLogin(Number(inputValue)));
      const data = await res.json();
      setUserId(data.id);
      // router.push("/");
    } catch (e) {
      // todo 之後再看看要不要做錯誤的 message momdal
      console.log(e);
    }
  };
  console.log("login success", userId);

  useEffect(() => {
    if (userId !== 0) {
      router.push("/");
    }
  }, [userId, router]);

  return (
    <main className="login">
      <div className="login__body">
        <div className="login__body-form">
          <input
            placeholder="UserID"
            className="login__body-form-input"
            value={inputValue}
            onChange={onChangeInputValue}
          />
          <Button
            buttonType={BUTTON_TYPE_CLASSES.base}
            onClick={onLoginHandler}
          >
            Log in
          </Button>
          <p className="login__body-form-para">Don’t have an account?</p>
          <div className="login__body-form-func">
            <Button buttonType={BUTTON_TYPE_CLASSES.base}>Register</Button>
            <Button buttonType={BUTTON_TYPE_CLASSES.base}>Google</Button>
          </div>
        </div>
      </div>
      <footer className="login__footer">
        <span>ALL RIGHT RESERVED.</span>
        <span>CONTENT PRIVACY</span>
      </footer>
    </main>
  );
};

export default LoginPage;
