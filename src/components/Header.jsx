import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const StyledAppBar = styled(AppBar)`
  display: block;
`;

const Header = ({ history }) => {
  const handleClick = () => {
    history.push("/");
  };
  return (
    <StyledAppBar>
      <Toolbar>
        <Button onClick={handleClick} variant="contained" color="primary">
          홈
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default withRouter(Header);
