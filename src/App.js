import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Card from "@material-ui/core/Card";

import Index from "./pages/Index";
import List from "./pages/List";
import Header from "./components/Header";

const StyledCard = styled(Card)`
  padding: 16px;
`;

function App() {
  return (
    <Router>
      <Header />

      <StyledCard>
        <Route exact path="/" component={Index} />
        <Route path="/list" component={List} />
      </StyledCard>
    </Router>
  );
}

export default App;
