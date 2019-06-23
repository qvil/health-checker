import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
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
import useAxios from "@react-qooks/use-axios";

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

const styledIconButtonProps = { loading: Boolean };

const StyledIconButton = styled(IconButton, styledIconButtonProps)`
  ${animation.spinReverse};
  animation: spinReverse ${({ loading }) => (loading ? "infinite" : 0)} 2.5s
    linear;
`;

const ServerList = ({ url, index }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: null,
    trigger: false
  });
  const render = useAxios(
    "http://ddragon.leagueoflegends.com/api/versions.json",
    state.trigger
  );

  const checkHealth = () => () => {
    // Hooks
    // fetch();

    setState({ ...state, loading: true });
    // API
    // axios(url)
    axios("http://ddragon.leagueoflegends.com/api/versions.json")
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          const data = res.data;
          setState({ ...state, loading: false, data });
        } else {
          throw new Error();
        }
      })
      .catch(error => setState({ ...state, loading: false, error }));
  };
  // const { loading, error, data } = state;
  return (
    <List className={classes.root}>
      <ListItem
        key={index}
        role={undefined}
        dense
        button
        onClick={() => setState({ trigger: true })}
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
          {render({
            loading: () => (
              <StyledIconButton
                edge="start"
                aria-label="Status"
                onClick={checkHealth(url)}
                loading
              >
                <CachedIcon />
              </StyledIconButton>
            ),
            error: error => <div>{error.toString()}</div>,
            data: data => <div>{JSON.stringify(data)}</div>
          })}
          {/* setTimeout 걸어서 시간 지날 때 마다 와이파이 칸 떨어지게 */}
          {/* <IconButton
            edge="end"
            aria-label="HealthCheck"
            onClick={checkHealth(url)}
          >
            <StyledWifiIcon styledcolor={index === 1 ? teal[500] : pink[500]} />
          </IconButton> */}
        </ListItemSecondaryAction>
      </ListItem>
      {/* {loading && <span>Loading...</span>}
      {!loading && error && <span>Error</span>}
      {!loading && !error && data && <span>{data}</span>} */}
    </List>
  );
};

export default ServerList;
