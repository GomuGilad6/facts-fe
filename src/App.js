import React, { Component } from 'react';
import styled, { injectGlobal } from "styled-components";

import Header from "./components/Header";
import CardList from "./components/CardList";

injectGlobal`
  body {
    font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    background-image: url(https://res.cloudinary.com/wework/image/upload/v1433183836/social_web/essentials_2x.png);
  }
`;

const CardListWrapper = styled("div")`
  padding: 0 300px;
`;

const Title = styled("h1")`
  font-size: 72px;
  font-family: "Proxima N W01 Reg", sans-serif;
`;

const Content = styled("div")`
  position: relative;
  margin-top: 140px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content>
          <CardListWrapper>
            <Title>Did you know?</Title>
            <CardList />
          </CardListWrapper>
        </Content>
      </div>
    );
  }
}

export default App;
