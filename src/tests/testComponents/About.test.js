import About from '../../Component/About'
import {shallow,mount} from 'enzyme';

test('Testing About component ', () => {
    const wrapper= shallow(<About/>)
    // expect(wrapper.find('form').length).toEqual(1)
    expect(wrapper.find('div').length).toEqual(2)
    expect(wrapper.find('section').length).toEqual(4)
    expect(wrapper.find('p').length).toEqual(6)
    expect(wrapper.find('b').length).toEqual(2)
    expect(wrapper.find('h1').length).toEqual(2)
    expect(wrapper.find('button').length).toEqual(3)
});