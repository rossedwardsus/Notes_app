import React from 'react';
import ReactDOM from 'react-dom';
import BrowseBudget from '../Budget/BrowseBudget';

import { Provider } from 'react-redux';
//import './index.css';
import store from '../store';
//import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  //const div = document.createElement('div');
  //ReactDOM.render(<Provider store={store}><Router><BrowseBudget /></Router></Provider>, div);
  //ReactDOM.unmountComponentAtNode(div);
  //enzyme mount
  //shallow

  const wrapper = shallow(<Provider store={store}><Router><BrowseBudget /></Router></Provider>);
});
