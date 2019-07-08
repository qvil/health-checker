import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
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
    axios
      .post(`${process.env.REACT_APP_API_URL}`, {
        email: localStorage.email,
        url: input
      })
      .then(res => {
        dispatch(addServerList(input, res.data.seq));
      })
      .catch(error => {
        console.log(error);
      });
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
            placeholder="https://www.google.com"
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
      {serverList &&
        serverList.map((value, index) => (
          <ServerList key={index} value={value} />
        ))}
    </>
  );
};

export default withCardLayout(List);
