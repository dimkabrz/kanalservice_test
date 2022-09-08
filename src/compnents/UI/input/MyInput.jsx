import React from "react";
import classes from "./MyInput.module.css";
import classnames from "classnames/bind";

const cx = classnames.bind(classes);

const MyInput = ({ className, ...props }) => {
  return <input className={cx("myInput", className)} {...props} />;
};

export default MyInput;
