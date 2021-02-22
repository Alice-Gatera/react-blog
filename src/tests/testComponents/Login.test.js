import {SignIn} from '../../SignIn';
import {shallow,mount} from 'enzyme';
import { Card, CardActionArea, CardActions, CardContent, CardMedia , Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });
const props={
             auth:{
                    email: "cyusa@gmail.com",
                    password: "123",
                    firstName: "cyusa",
                    lastName: "jacob",
                    id: 1
                   },
}
signIn:jest.fn(),
test('Testing login component ', () => {
    const wrapper= shallow(<SignIn {...props}/>)
    // expect(wrapper.find('form').length).toEqual(1)
    expect(wrapper.find('div').length).toEqual(0)
    expect(wrapper.find('form').length).toEqual(0)
    expect(wrapper.find('input').length).toEqual(0)
    expect(wrapper.find('label').length).toEqual(0)
    expect(wrapper.find('h2').length).toEqual(0)
    expect(wrapper.find(Button).length).toEqual(0)
});

















