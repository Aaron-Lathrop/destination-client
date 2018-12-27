import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Nav from '../nav';
Enzyme.configure({adapter: new Adapter()});

describe('<Nav />', () => {
    it('Renders without crashing', () => {
        shallow(<Nav />);
    });
});