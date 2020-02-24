import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';
import { Provider } from 'react-redux';
import store from '../../store';

describe('HomePage component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <HomePage />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
