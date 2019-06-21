import React from "react";
import ServerList from "../components/ServerList";
import { Container } from "../components";
import withCardLayout from "../components/withCardLayout";

const lists = [
  { url: "https://www.naver.com" },
  { url: "https://www.op.gg" },
  { url: "https://www.daum.net" }
];

const List = () => {
  return (
    <Container>
      <h1>List</h1>
      {lists.map(({ url }, index) => (
        <ServerList key={index} index={index} url={url} />
      ))}
    </Container>
  );
};

export default withCardLayout(List);
