import Home from '../../Home'
import {shallow,mount} from 'enzyme';



test('Testing Home component ', () => {
    const wrapper= shallow(<Home />)
    // expect(wrapper.find('form').length).toEqual(1)
    expect(wrapper.find('div').length).toEqual(2)
    });