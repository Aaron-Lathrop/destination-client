import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import store from '../../store';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import CreateTripForm from '../create-trip-form';
import { addTripToDatabase } from '../../actions/index';
Enzyme.configure({adapter: new Adapter()});

describe.only('<CreateTripForm />', () => {
    it('Renders without crashing', () => {
        shallow(<CreateTripForm />);
    });

    // it('should dispatch addTripToDatabase when form is submitted', function() {
    //     const dispatch = jest.fn(addTripToDatabase());
    //     const wrapper = mount(
    //         <Provider store={store}>
    //             <Router>
    //                 <CreateTripForm dispatch={dispatch} />
    //             </Router>
    //         </Provider>);
    //     const location = "Tokyo";
    //     const arrival = "1/2/2019";
    //     const returnDate = "1/3/2019";
    //     wrapper.find('input[name="location"]').value = location;
    //     wrapper.find('input[name="arrival"]').value = arrival;
    //     wrapper.find('input[name="return"]').value = returnDate;
    //     wrapper.find('form').simulate('submit', { preventDefault () {} });
    //     expect(dispatch).toHaveBeenCalled();
    // });
});