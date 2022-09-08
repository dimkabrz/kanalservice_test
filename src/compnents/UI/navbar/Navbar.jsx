import React from "react";
import classes from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MyLogo } from "../../../assets/images/logo 3.svg";
import { ReactComponent as MyLogoExit } from "../../../assets/images/group 8.svg";
import { ReactComponent as MyMobile } from "../../../assets/images/mobile_logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../pages/toolkit/ToolkitSlice";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.toolkit.isAuth);
  const realName = localStorage.getItem("token");
  const logOut = () => {
    dispatch(setAuth(false));
    localStorage.removeItem("token");
    navigate("/");
  };

  const isDeskTopOrMobile = useMediaQuery({ minWidth: 321 });
  return (
    <div className={classes.navBar}>
      {isDeskTopOrMobile ? (
        <MyLogo onClick={() => navigate("/")} className={classes.navBarLogo} />
      ) : (
        <MyMobile
          onClick={() => navigate("/")}
          className={classes.logoMobile}
        />
      )}
      {isAuth ? (
        <div className={classes.user_exit_bar}>
          <div className={classes.user_name}>{realName}</div>
          <MyLogoExit className={classes.exit_logo} onClick={logOut} />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
