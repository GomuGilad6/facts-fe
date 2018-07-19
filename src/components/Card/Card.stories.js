import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from "@storybook/addon-knobs";

import Card from './';

storiesOf('Card', module)
  .add('default', () => (
    <Card
      img={text("img", "https://cdn.wework.com/locations/image/63ad7bfe-f58b-11e7-94d5-1202be33576a/20170929_WeWork_Burbank_-_Common_Areas_-_Couch_Area-3.jpg?auto=format%2Ccompress&dpr=2&ch=DPR%2CWidth&crop=entropy&fit=crop&w=1000&h=auto")}
      body={text("body", 
        `The building was built in 1685, making it the oldest WeWork building in the universe! Rumour has it that the ghost of one of the constructors is still haunting the WeWork residences.`
      )}
      orientation={
        select("orientation", {
          top: "top",
          left: "left",
          right: "right"
        }, "top")
      }
      type={
        select("type", {
          FACT: "Fact",
          SLACK: "Slack"
        }, "FACT")
      }
    />
  ));