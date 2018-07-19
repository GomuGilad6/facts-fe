import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  top: 50%;
  position: absolute;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default storyFn => (
  <Container>
    {storyFn()}  
  </Container>
);