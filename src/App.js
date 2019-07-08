import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import Index from "./pages/Home";
import List from "./pages/List";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import reducer, { initialState, setServerList } from "./reducer";
import Store from "./store";
import useAxios from "@react-daily-hooks/use-axios";

function App() {
  const { loading, error, data } = useAxios(
    {
      url: `${process.env.REACT_APP_API_URL}/${localStorage.email}`
    },
    true
  );
  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (data) {
      dispatch(setServerList(data.data));
    }
  }, [data]);

  return (
    <Store.Provider value={{ store, dispatch }}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Router>
            <Header store={store} dispatch={dispatch} />
            <Route
              exact
              path="/"
              render={() =>
                store.isLogged ? <Redirect to="/list" /> : <Index />
              }
            />
            <Route
              path="/list"
              render={() =>
                !store.isLogged ? (
                  <Redirect to="/" />
                ) : (
                  <List loading={loading} error={error} />
                )
              }
            />
          </Router>
        </>
      </ThemeProvider>
    </Store.Provider>
  );
}

export default App;
