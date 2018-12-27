import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import SignUp from '../signup';
Enzyme.configure({adapter: new Adapter()});

describe('<SignUp />', () => {
    it('Renders without crashing', () => {
        shallow(<SignUp />);
    });
});