import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App';
Enzyme.configure({adapter: new Adapter()});

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });
});
