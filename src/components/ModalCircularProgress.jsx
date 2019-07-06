import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCircularProgress = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

export default ModalCircularProgress;
