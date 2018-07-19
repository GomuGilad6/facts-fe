import React from 'react';
import { storiesOf } from '@storybook/react';

import CardList from './';

storiesOf('CardList', module)
  .add('default', () => (
    <CardList/>
  ));