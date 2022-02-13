import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import RepoInfo from "./RepoInfo";
import repos from "../repos";

const FetchContent = () => {
  const [repositoryName, setRepositoryName] = useState(repos[0]);
  const [count, setCount] = useState(0);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleDecrease = () => {
    if (count === 0) {
      console.log("you reached 0, try increment");
      return;
    }
    setCount(count - 1);
  };

  const handleIncrease = () => {
    if (count === repos.length - 1) {
      console.log("You reached the top limit, try decrement");
      return;
    }
    setCount(count + 1);
  };

  useEffect(() => {
    repos.find((value, index) => {
      if (count < 0 || count > 7) {
        setRepositoryName("");
      }
      if (index === count) {
        setRepositoryName(value);
      }
      return;
    });
  }, [count]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/repos/${repositoryName}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => setError(error));
    setLoading(false);
  }, [repositoryName]);

  return (
    <>
      <Counter
        handleDecrease={handleDecrease}
        handleIncrease={() => handleIncrease()}
        count={count}
      />
      {loading ? <p>Loading...</p> : <RepoInfo data={data} />}
      {error && console.log(error)}
    </>
  );
};

export default FetchContent;
