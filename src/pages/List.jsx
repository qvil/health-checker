import React, { useState } from "react";
import styled from "styled-components";
import ServerList from "../components/ServerList";
import { Container } from "../components";
import withCardLayout from "../components/withCardLayout";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const StyledTextField = styled(TextField)`
  flex: 1;
  margin-bottom: 8px;
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
  margin-top: 8px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  align-self: stretch;
`;

const List = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([
    { url: "https://www.naver.com" },
    { url: "https://www.op.gg" },
    { url: "https://www.daum.net" }
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    let newList = [...list, { url: input }];
    setList(newList);
    setInput("");
  };

  return (
    <Container>
      <h2>Server List</h2>
      <Form onSubmit={handleSubmit}>
        <StyledTextField
          placeholder="https://www.op.gg"
          label="서버를 추가하세요."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <StyledButton variant="contained" color="primary">
          확인
        </StyledButton>
      </Form>

      {list.map(({ url }, index) => (
        <ServerList key={index} index={index} url={url} />
      ))}
    </Container>
  );
};

export default withCardLayout(List);
