import {About} from '../../Component/About'
import {shallow,mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });
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