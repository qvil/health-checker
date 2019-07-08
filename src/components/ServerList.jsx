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
import grey from "@material-ui/core/colors/grey";
import { animation } from "../styles/mixin";
// import DeleteIcon from "@material-ui/icons/Delete";
// import useAxios from "@react-qooks/use-axios";
// import useAxios from "@react-daily-hooks/use-axios";

const StyledWifiIcon = styled(WifiIcon)`
  color: ${({ styledcolor = grey[500] }) => styledcolor};
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
  animation: spinReverse
    ${({ loading }) => (loading === "true" ? "infinite" : 0)} 2.5s linear;
`;

const ServerList = ({ value: { url, seq } }) => {
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

  const checkHealth = () => {
    setState({ ...state, loading: true });
    axios
      .post(`${process.env.REACT_APP_API_URL}/${seq}`)
      .then(res => {
        if (res.status === 200) {
          // if (res.data.result.indexOf("Success") !== -1) {
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

  // const deleteServer = () => {

  // }

  const { loading, error, live } = state;

  return (
    <List className={classes.root}>
      <ListItem
        role={undefined}
        dense
        // button
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
            loading={loading ? "true" : "false"}
            aria-label="Status"
            onClick={checkHealth}
          >
            <CachedIcon />
          </StyledIconButton>
          {/* {error && <div>{error.toString()}</div>} */}
          {/* {!loading && !error && data && <div>{JSON.stringify(data)}</div>} */}
          {/* setTimeout 걸어서 시간 지날 때 마다 와이파이 칸 떨어지게 */}
          <IconButton aria-label="HealthCheck" onClick={checkHealth}>
            <StyledWifiIcon
              styledcolor={live ? teal[500] : error ? pink[500] : grey[500]}
            />
          </IconButton>
          {/* <IconButton ria-label="Delete" onClick={deleteServer}>
            <DeleteIcon />
          </IconButton> */}
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default ServerList;
