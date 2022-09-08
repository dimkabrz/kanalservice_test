import React from "react";
import classes from "./SubmitButton.module.css";

const SubmitButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.subBtn}>
      {children}
    </button>
  );
};

export default SubmitButton;
