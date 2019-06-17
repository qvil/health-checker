import React from "react";
// import useAxios from "../hooks/useAxios";
import ServerList from "../components/ServerList";

const lists = [
  { url: "//www.naver.com" },
  { url: "//www.op.gg" },
  { url: "//www.daum.net" }
];

const List = () => {
  return (
    <div>
      <h1>List</h1>
      <ol>
        {lists.map(({ url }, index) => (
          <ServerList key={index} url={url} />
        ))}
      </ol>
    </div>
  );
};

export default List;
