import {NotFound} from '../../NotFound'
import {shallow,mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });

test('Testing NotFound component ', () => {
    const wrapper= shallow(<NotFound/>)
    expect(wrapper.find('div').length).toEqual(1)
    expect(wrapper.find('h2').length).toEqual(1)
    expect(wrapper.find('p').length).toEqual(1)
    expect(wrapper.find('Link').length).toEqual(1)
    });