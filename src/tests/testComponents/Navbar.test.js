// import Enzyme from 'enzyme'
// import {shallow,mount} from 'enzyme';
// import Navbar from '../../Navbar'
// import AppBar from '@material-ui/core/AppBar'
// import { Toolbar, Typography } from "@material-ui/core";
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
// Enzyme.configure({ adapter: new Adapter() });

// const props={
//     auth:true,
// }
// logUserOut:jest.fn(),
// test('Testing Navabar component ', () => {
// const wrapper= shallow(<Navbar {...props}/>)
// // expect(wrapper.find('form').length).toEqual(1)
// expect(wrapper.find(AppBar).length).toEqual(1)
// expect(wrapper.find(Toolbar).length).toEqual(1)
// expect(wrapper.find(Typography).length).toEqual(6)
// expect(wrapper.find('Link').length).toEqual(5)
// expect(wrapper.find('a').length).toEqual(1)
// });
// test('Testing Navabar component when logged out', () => {
//     const prop = props
//     prop.auth=false
//     const wrapper= shallow(<Navbar {...props}/>)
//     // expect(wrapper.find('form').length).toEqual(1)
//     expect(wrapper.find(AppBar).length).toEqual(1)
//     expect(wrapper.find(Toolbar).length).toEqual(1)
//     expect(wrapper.find(Typography).length).toEqual(1)
//     expect(wrapper.find('Link').length).toEqual(6)
//     expect(wrapper.find('a').length).toEqual(0)
//     });


import {Navbar} from '../../Navbar'
import {shallow,mount} from 'enzyme';
import AppBar from '@material-ui/core/AppBar'
import { Typography } from "@material-ui/core";
const props={
    auth:true,
}
logUserOut:jest.fn(),
test('Testing Navabar component ', () => {
const wrapper= shallow(<Navbar {...props}/>)
// expect(wrapper.find('form').length).toEqual(1)
expect(wrapper.find(AppBar).length).toEqual(1)
expect(wrapper.find(Typography).length).toEqual(1)
expect(wrapper.find('Link').length).toEqual(2)
expect(wrapper.find('button').length).toEqual(1)
});
test('Testing Navabar component when logged out', () => {
    const prop = props
    prop.auth=false
    const wrapper= shallow(<Navbar {...props}/>)
    // expect(wrapper.find('form').length).toEqual(1)
    expect(wrapper.find(AppBar).length).toEqual(1)
    expect(wrapper.find(Typography).length).toEqual(1)
    expect(wrapper.find('Link').length).toEqual(3)
    expect(wrapper.find('button').length).toEqual(0)
    });