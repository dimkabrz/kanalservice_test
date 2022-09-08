import React, { useState } from "react";
import classes from "./LoginPage.module.css";
import MyInput from "../../compnents/UI/input/MyInput";
import SubmitButton from "../../compnents/UI/button/SubmitButton";
import MyForm from "../../compnents/UI/loginform/MyForm";
import { useDispatch } from "react-redux";
import { setAuth, setRealUser } from "../toolkit/ToolkitSlice";
import myJson from "../../user.json";
import { useNavigate } from "react-router-dom";
import classnames from "classnames/bind";

const cx = classnames.bind(classes);

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({ login: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const loginHandler = () => {
    const realUser = myJson.users.find((item) => {
      return item.login === user.login;
    });
    if (realUser) {
      passwordHandler(realUser);
      setLoginError("");
    } else {
      setLoginError("Логин неверный");
      return false;
    }
  };
  const passwordHandler = (realUser) => {
    if (user.password === realUser.password) {
      dispatch(setAuth(true));
      navigate("/postspage");
      dispatch(setRealUser(realUser));
      localStorage.setItem("token", realUser.name);
    } else {
      setPasswordError("Пароль неверный");
      return false;
    }
  };

  const login = (e) => {
    e.preventDefault();
    loginHandler();
  };
  return (
    <div>
      <form className={classes.modal_form}>
        <span className={classes.auth_title}>Autorization</span>
        <MyForm
          label={"login"}
          currentInput={
            <MyInput
              type="text"
              value={user.login}
              autoComplete={"current-login"}
              onChange={(e) => setUser({ ...user, login: e.target.value })}
            />
          }
          currentError={loginError}
        />
        <MyForm
          label={"password"}
          currentInput={
            <MyInput
              type="password"
              value={user.password}
              autoComplete={"current-password"}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className={cx("password_input_mobile", "myInput")}
            />
          }
          currentError={passwordError}
        />
        <SubmitButton className={classes.submit_button} onClick={login}>
          Submit
        </SubmitButton>
      </form>
    </div>
  );
};

export default LoginPage;
