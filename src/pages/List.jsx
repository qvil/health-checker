import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import ServerList from "../components/ServerList";
import withCardLayout from "../components/withCardLayout";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Store from "../store";
import { addServerList } from "../reducer";
import { CardContent, CardHeader } from "@material-ui/core";
import { StyledCardActions } from "./Home";

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
  const {
    store: { serverList },
    dispatch
  } = useContext(Store);
  const inputEl = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addServerList(input));
    setInput("");
  };

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <>
      <CardHeader title="Server List" />
      <CardContent>
        <Form onSubmit={handleSubmit}>
          <StyledTextField
            inputRef={inputEl}
            placeholder="https://www.op.gg"
            label="서버를 추가하세요."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </Form>
      </CardContent>
      <StyledCardActions>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          확인
        </StyledButton>
      </StyledCardActions>
      {serverList.map(({ url, live }, index) => (
        <ServerList key={index} index={index} url={url} live={live} />
      ))}
    </>
  );
};

export default withCardLayout(List);
