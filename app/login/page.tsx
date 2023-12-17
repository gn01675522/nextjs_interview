import Button, { BUTTON_TYPE_CLASSES } from "@/components/Button/Button.component";

import "./page.scss";

const LoginPage = () => {
  return (
    <main className="login">
      <div className="login__body">
        <form className="login__body-form">
          <input placeholder="UserID" className="login__body-form-input" />
          <Button buttonType={BUTTON_TYPE_CLASSES.base}>Log in</Button>
          <p className="login__body-form-para">Don’t have an account?</p>
          <div className="login__body-form-func">
            <Button buttonType={BUTTON_TYPE_CLASSES.base}>Register</Button>
            <Button buttonType={BUTTON_TYPE_CLASSES.base}>Google</Button>
          </div>
        </form>
      </div>
      <footer className="login__footer">
        <span>ALL RIGHT RESERVED.</span>
        <span>CONTENT PRIVACY</span>
      </footer>
    </main>
  );
};

export default LoginPage;
