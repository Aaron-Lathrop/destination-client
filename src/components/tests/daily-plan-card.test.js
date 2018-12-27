import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import DailyPlanCard from '../daily-plan-card';
Enzyme.configure({adapter: new Adapter()});

describe('<DailyPlanCard />', () => {
    it('Renders without crashing', () => {
        shallow(<DailyPlanCard />);
    });
});