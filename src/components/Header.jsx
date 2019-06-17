import React from "react";
import { withRouter } from "react-router-dom";

const Header = ({ history }) => {
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      <button onClick={handleClick}>홈</button>
    </div>
  );
};

export default withRouter(Header);
