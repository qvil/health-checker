import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import Index from "./pages/Home";
import List from "./pages/List";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

function App() {
  return (
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
  );
}

export default App;
