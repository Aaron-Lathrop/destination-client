import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import TripCard from '../trip-card';
Enzyme.configure({adapter: new Adapter()});

describe('<TripCard />', () => {
    it('Renders without crashing', () => {
        shallow(<TripCard />);
    });
});