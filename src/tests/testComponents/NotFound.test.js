import NotFound from '../../NotFound'
import {shallow,mount} from 'enzyme';


test('Testing NotFound component ', () => {
    const wrapper= shallow(<NotFound/>)
    expect(wrapper.find('div').length).toEqual(1)
    expect(wrapper.find('h2').length).toEqual(1)
    expect(wrapper.find('p').length).toEqual(1)
    expect(wrapper.find('Link').length).toEqual(1)
    });