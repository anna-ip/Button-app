import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
  },
  footerText: {
    fontFamily: "Molengo, sans-serif",
    textAlign: "center",
    color: "#283180",
  },
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.footerText}>
        Anna Almestål <span> {currentYear}</span>
      </p>
    </div>
  );
};

export default Footer;
