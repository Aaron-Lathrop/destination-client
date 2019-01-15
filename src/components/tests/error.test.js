import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Error from '../error';
Enzyme.configure({adapter: new Adapter()});

describe('<Error />', () => {
    it('Renders without crashing', () => {
        shallow(<Error />);
    });

    it('Renders an error update', function() {
        let ERROR_MESSAGE = 'Invalid username or password';

        let wrapper = shallow(<Error error={ERROR_MESSAGE} />);
        expect(wrapper.contains(ERROR_MESSAGE)).toEqual(true);
    });
});