import {Contact} from '../../Component/Contact'
import {shallow,mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });
test('Testing Contact component ', () => {
    const wrapper= shallow(<Contact/>)
    // expect(wrapper.find('form').length).toEqual(1)
    expect(wrapper.find('div').length).toEqual(1)
    expect(wrapper.find('input').length).toEqual(2)
    expect(wrapper.find('label').length).toEqual(3)
    expect(wrapper.find('textarea').length).toEqual(1)
    expect(wrapper.find('form').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(1)
});