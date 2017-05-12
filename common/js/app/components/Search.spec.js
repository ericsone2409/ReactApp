import React from 'react'
import Search from './Search.js'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('Search snapshot test', () => {
	const component = shallow(<Search />)
	const tree = shallowToJson(component)
	expect(tree).toMatchSnapshot()
})
