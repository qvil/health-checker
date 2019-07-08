import React, { useState, useContext, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import useAxios from "@react-daily-hooks/use-axios";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import withCardLayout from "../components/withCardLayout";
import ModalCircularProgress from "../components/ModalCircularProgress";
import Store from "../store";
import { setServerList, setLoginStatus } from "../reducer";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
`;

const Home = ({ history }) => {
  const [input, setInput] = useState("");
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const { loading, error, data } = useAxios(
    {
      url: `${process.env.REACT_APP_API_URL}/${input}`
    },
    fetchTrigger
  );
  const { dispatch } = useContext(Store);
  const inputEl = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    if (input === "") {
      return;
    }
    localStorage.email = input;
    setFetchTrigger(true);
  };

  useEffect(() => {
    inputEl.current.focus();
    if (!loading && !error && data) {
      dispatch(setLoginStatus(true));
      dispatch(setServerList(data.data));
      alert("환영합니다!");
      history.push("/list");
    }
  });

  return (
    <>
      {loading && <ModalCircularProgress />}
      <>
        <CardHeader title="Home" />
        <CardContent>
          <Form onSubmit={handleSubmit}>
            <TextField
              inputRef={inputEl}
              type="text"
              placeholder="이메일을 입력하세요."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </Form>
        </CardContent>
        <StyledCardActions>
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            확인
          </Button>
        </StyledCardActions>
      </>
    </>
  );
};

export default withRouter(withCardLayout(Home));
