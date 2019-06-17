import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from "./pages/Index";
import List from "./pages/List";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />

      <Route exact path="/" component={Index} />
      <Route path="/list" component={List} />
    </Router>
  );
}

export default App;
