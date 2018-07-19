import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import Container from "./Container";

const req = require.context('../src', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(Container);
addDecorator(withKnobs);

configure(loadStories, module);