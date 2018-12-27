import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App';
Enzyme.configure({adapter: new Adapter()});


// import ReactDOM from 'react-dom';


describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
