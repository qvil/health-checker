import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const StyledAppBar = styled(AppBar)`
  position: sticky !important;
`;

const useStyles = makeStyles(theme => ({
  appBar: theme.palette.primary[100]
}));

const Header = ({ history }) => {
  const classes = useStyles();

  const handleClick = () => {
    history.push("/");
  };
  return (
    <StyledAppBar className={classes.appBar}>
      <Toolbar>
        <Button onClick={handleClick} variant="contained" color="primary">
          홈
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default withRouter(Header);
