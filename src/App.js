import React, { useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import Index from "./pages/Home";
import List from "./pages/List";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import reducer, { initialState } from "./reducer";
import Store from "./store";

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ store, dispatch }}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Router>
            <Header />
            <Route exact path="/" component={Index} />
            <Route path="/list" component={List} />
          </Router>
        </>
      </ThemeProvider>
    </Store.Provider>
  );
}

export default App;
