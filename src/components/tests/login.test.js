import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import LogIn from '../login';
Enzyme.configure({adapter: new Adapter()});

describe('<LogIn />', () => {
    it('Renders without crashing', () => {
        shallow(<LogIn />);
    });
});