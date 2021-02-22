import Home from '../../Home'
import {shallow,mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });


test('Testing Home component ', () => {
    const wrapper= shallow(<Home />)
    // expect(wrapper.find('form').length).toEqual(1)
    expect(wrapper.find('div').length).toEqual(2)
    });