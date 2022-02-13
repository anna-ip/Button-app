/* eslint-disable react/prop-types */
import React from "react";
import { createUseStyles } from "react-jss";
import Button from "../ui-components/Button";
import { ReactComponent as AddIcon } from "../assets/add_black_18dp.svg";
import { ReactComponent as RemoveIcon } from "../assets/remove_black_24dp.svg";
const useStyles = createUseStyles({
  counterContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    background: "#EFCEE3",
    height: 100,

    "@media (min-width: 768px)": {
      height: 150,
    },
    "@media (min-width: 1024px)": {
      padding: {
        top: 0,
        right: 40,
        bottom: 0,
        left: 40,
      },
    },
  },
  counter: {
    fontFamily: "Molengo, sans-serif",
    fontSize: "1rem",
    textAlign: "center",
    color: "#283180",
    margin: {
      top: 0,
      right: "5%",
      bottom: 0,
      left: "5%",
    },
    "@media (min-width: 768px)": {
      fontSize: "1.5rem",
      margin: {
        top: 0,
        right: "1.2rem",
        bottom: 0,
        left: "1.2rem",
      },
    },
  },
});

const Counter = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.counterContainer}>
      <Button
        onClick={props.handleDecrease}
        name="DECREMENT"
        background="white"
        color="black"
        hoverBackground="black"
        hoverColor="white"
        icon={<RemoveIcon />}
        iconMarginBottom={3}
      />
      <h2 className={classes.counter}>Counter: {props.count}</h2>
      <Button
        onClick={props.handleIncrease}
        name="INCREMENT"
        background="hotpink"
        color="white"
        border="none"
        hoverBackground="rebeccapurple"
        icon={<AddIcon />}
      />
    </div>
  );
};

export default Counter;
