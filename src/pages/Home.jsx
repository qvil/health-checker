import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import withCardLayout from "../components/withCardLayout";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
`;

const Home = ({ history }) => {
  const [input, setInput] = useState("");

  const handleSubmit = event => {
    if (input.indexOf(1) !== -1) {
      console.log("TCL: Home -> input.indexOf(1)", input.indexOf(1));
      history.push("/add");
      return;
    }
    event.preventDefault();
    if (input === "") {
      return;
    }
    alert(`Hi: ${input}`);
    history.push("/list");
  };

  return (
    <>
      <CardHeader title="Home" />
      <CardContent>
        <Form onSubmit={handleSubmit}>
          <TextField
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
  );
};

export default withRouter(withCardLayout(Home));
