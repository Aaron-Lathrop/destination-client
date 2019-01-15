import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import TripSection from '../trip-section';
Enzyme.configure({adapter: new Adapter()});

describe('<TripSection />', () => {
    it('Renders without crashing', () => {
        shallow(<TripSection />);
    });
});