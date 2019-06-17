import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Index = ({ history }) => {
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
    <div>
      <h1>Index</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이메일을 입력하세요."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          color="primary"
        >
          확인
        </Button>
      </form>
    </div>
  );
};

export default withRouter(Index);
