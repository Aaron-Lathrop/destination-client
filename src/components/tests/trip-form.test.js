import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import TripForm from '../trip-form';
Enzyme.configure({adapter: new Adapter()});

describe('<TripForm />', () => {
    it('Renders without crashing', () => {
        shallow(<TripForm />);
    });
});