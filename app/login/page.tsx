"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Button, {
  BUTTON_TYPE_CLASSES,
} from "@/components/Button/Button.component";

import { apiUserLogin, apiUserAlbumList } from "@/lib/api";
import { useUserContext } from "@/store/user.context";

import "./page.scss";

const LoginPage = () => {
  const [inputValue, setInputValue] = useState("");
  const { user, setUser, setHasAlbum } = useUserContext();
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
        // todo 之後再看看要不要做錯誤的 message momdal
        console.log("Unvalid User ID");
      } else {
        const data = await res.json();
        const albumRes = await fetch(apiUserAlbumList(data.id));
        const albumData = await albumRes.json();

        setUser({ id: data.id, name: data.name, email: data.email });
        setHasAlbum([...albumData]);
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
