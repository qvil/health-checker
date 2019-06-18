import React from "react";
import Card from "../components/Card";
import { Container } from ".";

const withCardLayout = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <Container>
          <Card>
            <WrappedComponent />
          </Card>
        </Container>
      );
    }
  };
};

export default withCardLayout;
