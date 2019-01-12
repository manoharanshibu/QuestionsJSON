import React from 'react';
import renderer from 'react-test-renderer';

import TextItem from './TextItem';

describe('snap shot test', () => {
  it('renders correctly when there are no items', () => {
    const tree = renderer.create(<TextItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});