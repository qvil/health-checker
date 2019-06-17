import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const Index = ({ history }) => {
  const [input, setInput] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    alert(input);
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
        <button>확인</button>
      </form>
    </div>
  );
};

export default withRouter(Index);
