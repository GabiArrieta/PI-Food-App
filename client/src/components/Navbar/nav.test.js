import React from 'react';
import {Link} from 'react-router-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Nav from './Navbar';

Enzyme.configure({adapter: new Adapter()});

describe('<Nav />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Nav />);
	});

	it('should render three <Link />', () => {
		expect(wrapper.find(Link)).toHaveLength(3);
	});
	it('the first link must contain the text "Food App" and lead to landing page', () => {
		expect(wrapper.find(Link).at(0).prop('to')).toEqual('/');
        expect(wrapper.find(Link).at(0).text()).toEqual('Food App');
	});
	
    it('the second link must contain the text "Create Recipe" and lead to create', () => {
		expect(wrapper.find(Link).at(1).prop('to')).toEqual('/home');
        expect(wrapper.find(Link).at(1).text()).toEqual('Home');
	});
    
    it('the third link must contain the text "Home" and lead to home', () => {
		expect(wrapper.find(Link).at(1).prop('to')).toEqual('/home');
        expect(wrapper.find(Link).at(1).text()).toEqual('Home');
	});
    
    
});