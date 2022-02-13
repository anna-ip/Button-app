/* eslint-disable react/prop-types */
import React from "react";
import { ReactComponent as Star } from "../assets/star_rate_black_24dp.svg";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    background: "#293282",
    minHeight: 300,
    width: "100%",

    "@media (min-width: 768px)": {
      background: "#FCF1D3",
      margin: {
        top: 10,
        right: 25,
        bottom: 10,
        left: 25,
      },
    },
    "@media (min-width: 1024px)": {
      maxWidth: 1100,
      margin: {
        top: 10,
        right: "10rem",
        bottom: 10,
        left: "10rem",
      },
    },
  },
  name: {
    fontFamily: "Molengo, sans-serif",
    fontSize: "1.5rem",
    textTransform: "capitalize",
    color: "#FCF1D3",
    "@media (min-width: 768px)": {
      color: "#293282",
    },
    "@media (min-width: 1024px)": {
      fontSize: "1.8rem",
    },
  },
  description: {
    fontFamily: "Taviraj, serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: "#FCF1D3",
    padding: {
      top: 0,
      right: 25,
      bottom: 0,
      left: 25,
    },
    "@media (min-width: 768px)": {
      color: "#293282",
      fontWeight: 500,
      fontSize: "1.2rem",
    },
    "@media (min-width: 1024px)": {
      fontSize: "1.5rem",
    },
  },
  stargazersCount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Taviraj, serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: "#FCF1D3",
    "@media (min-width: 768px)": {
      color: "#293282",
      fontWeight: 500,
      fontSize: "1.2rem",
    },
    "@media (min-width: 1024px)": {
      fontSize: "1.5rem",
    },
  },
  star: {
    color: "#ff69b4",
    width: 30,
    height: 30,
  },
});

const RepoInformation = (props) => {
  const classes = useStyles(props);
  const { data } = props;

  return (
    <div className={classes.container}>
      {data?.message && <p className={classes.description}>{data?.message}</p>}
      <h2 className={classes.name}>{data?.full_name}</h2>

      <p className={classes.description}>{data?.description}</p>
      <p className={classes.stargazersCount}>
        <svg className={classes.star}>{<Star />}</svg> {data?.stargazers_count}
      </p>
    </div>
  );
};

export default RepoInformation;
