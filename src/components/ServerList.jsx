import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CachedIcon from "@material-ui/icons/Cached";
import WifiIcon from "@material-ui/icons/Wifi";
import teal from "@material-ui/core/colors/teal";
import pink from "@material-ui/core/colors/pink";
import { animation } from "../styles/mixin";
// import useAxios from "@react-qooks/use-axios";
// import useAxios from "@react-daily-hooks/use-axios";

const StyledWifiIcon = styled(WifiIcon)`
  color: ${({ styledcolor }) => styledcolor};
`;

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  ok: {
    backgroundColor: "grren"
  },
  status: {
    ok: {
      background: "green"
    }
  }
}));

const StyledIconButton = styled(IconButton)`
  ${animation.spinReverse};
  animation: spinReverse ${({ loading }) => (loading ? "infinite" : 0)} 2.5s
    linear;
`;

const ServerList = ({ value: { url, seq }, index }) => {
  const classes = useStyles();
  // const [fetchTrigger, setFetchTrigger] = useState(false);
  // const { loading, error, data } = useAxios(
  //   { url: `${process.env.REACT_APP_API_URL}/email@qvil.dev` },
  //   fetchTrigger
  // );
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: null,
    live: false
  });
  console.log("TCL: ServerList -> state", state);

  const checkHealth = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/${seq}`)
      .then(res => {
        setState({ ...state, loading: true });
        console.log(res);
        if (res.status === 200) {
          // const data = res.data;
          setState({ ...state, live: true });
        } else {
          setState({ ...state, loading: false, error: new Error() });
        }
      })
      .catch(error => {
        setState({ ...state, error });
      });
  };
  const { loading, error, data, live } = state;

  return (
    <List className={classes.root}>
      <ListItem
        role={undefined}
        dense
        button
        // onClick={() => setFetchTrigger(true)}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            // checked={checked.indexOf(value) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": url }}
          />
        </ListItemIcon>
        <ListItemText id={`checkbox-list-label-${url}`} primary={url} />
        <ListItemSecondaryAction>
          <StyledIconButton
            edge="start"
            aria-label="Status"
            onClick={checkHealth}
          >
            <CachedIcon />
          </StyledIconButton>
          {loading && (
            <StyledIconButton
              edge="start"
              aria-label="Status"
              onClick={checkHealth}
            >
              <CachedIcon />
            </StyledIconButton>
          )}
          {error && <div>{error.toString()}</div>}
          {!loading && !error && data && <div>{JSON.stringify(data)}</div>}
          {/* setTimeout 걸어서 시간 지날 때 마다 와이파이 칸 떨어지게 */}
          <IconButton edge="end" aria-label="HealthCheck" onClick={checkHealth}>
            <StyledWifiIcon styledcolor={live ? teal[500] : pink[500]} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default ServerList;
