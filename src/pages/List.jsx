import React from "react";

const lists = [
  { url: "//www.naver.com" },
  { url: "//www.op.gg" },
  { url: "//www.daum.net" }
];

const List = () => {
  const checkHealth = url => () => {
    window.open(url);
    // API
  };

  return (
    <div>
      <h1>List</h1>
      <ol>
        {lists.map(({ url }, index) => (
          <li key={index}>
            <span>{url}</span>
            <button onClick={checkHealth(url)}>Check</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default List;
