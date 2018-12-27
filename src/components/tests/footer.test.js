import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Footer from '../footer';
Enzyme.configure({adapter: new Adapter()});

describe('<Footer />', () => {
    it('Renders without crashing', () => {
        shallow(<Footer />);
    });
});
