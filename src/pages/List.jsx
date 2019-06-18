import React from "react";
// import useAxios from "../hooks/useAxios";
import ServerList from "../components/ServerList";
import Icon from "@material-ui/core/Icon";
import { Container } from "../components";
import withCardLayout from "../components/withCardLayout";

const lists = [
  { url: "//www.naver.com" },
  { url: "//www.op.gg" },
  { url: "//www.daum.net" }
];

const List = () => {
  return (
    <Container>
      <h1>List</h1>
      <ol>
        {lists.map(({ url }, index) => (
          <ServerList key={index} url={url} />
        ))}
      </ol>
      <Icon>star</Icon>
    </Container>
  );
};

export default withCardLayout(List);
