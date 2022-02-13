import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    background: "#FCF1D3",
    height: "100vh",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
