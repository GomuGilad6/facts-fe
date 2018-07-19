import React from "react";
import styled from "styled-components";

import Card from "../Card";

import fetchFacts from "../../services/fetchFacts";
import getImage from "../../helpers/getImage";

import slackLogo from "../../assets/images/slack-logo.png";

const INTERVAL = 12 * 1000;

let interval;

const CardWrapper = styled(Card)`
  margin: 45px 0;
`;

class CardList extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    this._fetchFacts();
    interval = setInterval(() => {
      this._fetchFacts()
    }, INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  _fetchFacts = () => {
    fetchFacts()
      .then(payload => {
        this.setState({
          items: payload.map(({ type, fact: body, image: img }) => {
            if (img === null || img === "") {
              img = getImage();
            }
            return ({
              img,
              body,
              type
            });
          })
        });
      });
  };

  renderItems = () => this.state.items.map(({ img, body, type }, index) => (
    <CardWrapper
      key={`${body}-${index}`}
      img={type === "SLACK" ? slackLogo : img}
      body={body}
      type={type}
      orientation={index % 2 === 0 ? "left" : "right"}
    />
  ));

  render() {
    return this.renderItems();
  }
}

export default CardList;