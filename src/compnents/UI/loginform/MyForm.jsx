import React from "react";
import classes from "./MyForm.module.css";

const MyForm = ({ label, currentInput, currentError, ...props }) => {
  return (
    <div className={classes.line}>
      <span className={classes.title}>{label}</span>
      {currentInput}
      <span className={classes.myError}>{currentError}</span>
    </div>
  );
};

export default MyForm;
