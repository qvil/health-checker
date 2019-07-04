import React, { useState } from "react";
import styled from "styled-components";
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
import useAxios from "@react-daily-hooks/use-axios";

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

const StyledCachedIcon = styled(CachedIcon)`
  ${animation.spinReverse};
  animation: spinReverse ${({ loading }) => (loading ? "infinite" : 0)} 2.5s
    linear;
`;

const ServerList = ({ url, index }) => {
  const classes = useStyles();
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const { loading, error, data } = useAxios(
    { url: `${process.env.REACT_APP_API_URL}/email@qvil.dev` },
    fetchTrigger
  );

  console.log("TCL: ServerList -> data", data);
  const checkHealth = () => () => {
    // Hooks
    // fetch();
    // API
    // axios(url)
    // axios("http://ddragon.leagueoflegends.com/api/versions.json")
    //   .then(res => {
    //     console.log(res);
    //     if (res.status === 200) {
    //       const data = res.data;
    //       setState({ ...state, data });
    //     } else {
    //       throw new Error();
    //     }
    //   })
    //   .catch(error => setState({ ...state, error }));
  };
  // const { loading, error, data } = state;
  return (
    <List className={classes.root}>
      <ListItem
        key={index}
        role={undefined}
        dense
        button
        onClick={() => setFetchTrigger(true)}
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
            onClick={checkHealth(url)}
          >
            <StyledCachedIcon loading />
          </StyledIconButton>
          {/* 이것보다 loading, error, data state관리가 더 나은듯 */}
          {loading && (
            <StyledIconButton
              edge="start"
              aria-label="Status"
              onClick={checkHealth(url)}
            >
              <CachedIcon />
            </StyledIconButton>
          )}
          {error && <div>{error.toString()}</div>}
          {!loading && !error && data && <div>{JSON.stringify(data)}</div>})}
          {/* setTimeout 걸어서 시간 지날 때 마다 와이파이 칸 떨어지게 */}
          <IconButton
            edge="end"
            aria-label="HealthCheck"
            onClick={checkHealth(url)}
          >
            <StyledWifiIcon styledcolor={index === 1 ? teal[500] : pink[500]} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {/* {loading && <span>Loading...</span>}
      {!loading && error && <span>Error</span>}
      {!loading && !error && data && <span>{data}</span>} */}
    </List>
  );
};

export default ServerList;
