import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import CreateTripForm from '../create-trip-form';
Enzyme.configure({adapter: new Adapter()});

describe.only('<CreateTripForm />', () => {
    it('Renders without crashing', () => {
        shallow(<CreateTripForm />);
    });
});