import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const StyledCard = styled(Card)`
  margin: 16px;
  padding: 16px;
  width: 400px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
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
    event.preventDefault();
    if (input === "") {
      return;
    }
    alert(`Hi: ${input}`);
    history.push("/list");
  };

  return (
    <Container>
      <StyledCard>
        <CardContent>
          <h1>Home</h1>
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
      </StyledCard>
    </Container>
  );
};

export default withRouter(Home);
