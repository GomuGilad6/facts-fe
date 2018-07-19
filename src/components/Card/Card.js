import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledCard = styled("div")`
  position: relative;
  display: flex;
  flex-direction: ${({ orientation }) => orientation === "top" ? "column" : "row"};
  flex-flow: ${({ orientation }) => orientation === "right" ? "row-reverse" : ""};
  align-items: center;
  background: #252729;
  padding: 0;
  border: ${({ type }) => type === "FACT" ? "none" : "border: 1px solid #e8e8e8"};
  border-radius: 50px;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  transition: box-shadow .1s ease,transform .1s ease;
  transition: box-shadow .1s ease,transform .1s ease,-webkit-box-shadow .1s ease,-webkit-transform .1s ease;
  width: ${({ orientation }) => orientation === "top" ? "500px" : "initial"};
  height: max-content;
  animation: ${fade} 2s linear;
`;

const getMargin = (type, orientation) => {
  const isSlack = type === "SLACK";
  const isTop = orientation === "top";
  const isLeft = isSlack && orientation === "left";
  const isRight = isSlack && orientation === "right";
  const marginSize = "60px";
  return `${isSlack ? marginSize : 0} ${isRight ? marginSize : 0} ${isSlack && !isTop ? marginSize : 0} ${isLeft ? marginSize : 0}`;
};

const getBorderRadius = (orientation) => {
  switch(orientation) {
    case "left":
      return "50px 0 0 50px";
    case "right":
      return "0 50px 50px 0";
    default:
      return "0";
  }
};

const Image = styled("img")`
  position: relative;
  display: block;
  flex: 0 0 auto;
  padding: 0;
  background: ${({ type }) => type === "SLACK" ? "#fff" : "transparent"};
  object-fit: cover;
  width: ${({ orientation, type }) => type === "FACT" ? (orientation === "top" ? "100%" : "initial") : "200px"};
  height: ${({ orientation, type }) => type === "FACT" ? (orientation === "top" ? "300px" : "400px") : "200px"};
  max-height: ${({ orientation }) => orientation === "top" ? "initial" : "400px"};
  border-radius: ${({ orientation, type }) => type === "FACT" ? (getBorderRadius(orientation)) : "600px"};
  border: ${({ type }) => type === "SLACK" ? "50px solid #fff" : "none"}
  margin: ${({ type, orientation }) => getMargin(type, orientation)};
`;

const Content = styled("div")`
  width: 90%;
  flex-grow: 1;
  border: none;
  background: 0 0;
  margin: 0;
  margin: 0 2em;
  box-shadow: none;
  border-radius: 0;
  color: #fff;
  font-size: 72px;
`;

const Body = styled("div")`
  margin-top: .5em;
  line-height: 2em;
`;

const renderImage = (img, type, orientation) => (
  <Image
    src={img}
    type={type}
    orientation={orientation}
  />
);

class Card extends React.Component {
  render() {
    const { img, body, orientation, type, className } = this.props;
    return (
      <StyledCard
    orientation={orientation}
    type={type}
    className={className}
  >
    {renderImage(img, type, orientation)}
    <Content
      type={type}
    >
      <Body>
        {body}
      </Body>
    </Content>
  </StyledCard>
    )
  }
}


Card.propTypes = {
  img: PropTypes.string,
  body: PropTypes.string,
  orientation: PropTypes.string,
  type: PropTypes.string
};

Card.defaultProps = {
  img: "",
  body: "",
  orientation: "",
  type: ""
};

export default Card;