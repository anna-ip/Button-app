import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#E2EBD9",
    padding: 10,
    "@media (min-width: 768px)": {
      height: 150,
    },
  },
  title: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2rem",
    textAlign: "center",
    color: "#283180",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Press a button</h1>
    </div>
  );
};

export default Header;
