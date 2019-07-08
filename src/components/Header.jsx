import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { setLoginStatus } from "../reducer";

const StyledAppBar = styled(AppBar)`
  position: sticky !important;
`;

const useStyles = makeStyles(theme => ({
  appBar: theme.palette.primary[100],
  icon: { color: "#fff" },
  login: { marginLeft: "auto" }
}));

const Header = ({ history, store: { isLogged }, dispatch }) => {
  const classes = useStyles();

  const handleClick = menu => () => {
    history.push(menu);
  };

  const login = () => {
    history.push("/");
  };
  const logout = () => {
    console.log(2);
    dispatch(setLoginStatus(false));
  };

  return (
    <StyledAppBar className={classes.appBar}>
      <Toolbar>
        <IconButton className={classes.icon} onClick={handleClick("/")}>
          <HomeIcon />
        </IconButton>
        <IconButton className={classes.icon} onClick={handleClick("/list")}>
          <MenuIcon />
        </IconButton>
        <IconButton
          className={[classes.icon, classes.login]}
          onClick={handleClick("/list")}
        >
          {isLogged ? (
            <LockIcon onClick={logout} />
          ) : (
            <LockOpenIcon onClick={login} />
          )}
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default withRouter(Header);
