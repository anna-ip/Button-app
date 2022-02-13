/* eslint-disable react/prop-types */
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    fontFamily: "Molengo, sans-serif",
    borderRadius: 20,
    borderWidth: 0.8,
    padding: {
      top: 8,
      right: 10,
      bottom: 8,
      left: 10,
    },
    cursor: "pointer",
    fontSize: "0.8rem",
    background: (props) => props.background,
    color: (props) => props.color,
    border: (props) => props.border,

    "&:hover": {
      background: (props) => props.hoverBackground,
      color: (props) => props.hoverColor,
    },

    "@media (min-width: 768px)": {
      fontSize: "1rem",
      padding: {
        top: 10,
        right: 15,
        bottom: 10,
        left: 15,
      },
      margin: 20,
    },
  },
  icon: {
    height: 14,
    width: 14,
    marginBottom: (props) => props.iconMarginBottom,
  },
});

const Button = (props) => {
  const classes = useStyles(props);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <svg className={classes.icon}>{props.icon}</svg> {props.name}
    </button>
  );
};

export default Button;
