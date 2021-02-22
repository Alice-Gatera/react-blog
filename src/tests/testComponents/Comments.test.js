import {Comments} from '../../Comments'
import {shallow,mount} from 'enzyme';
import Button from '@material-ui/core/Button'
import { Card, TextField, Typography } from "@material-ui/core";
import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
Enzyme.configure({ adapter: new Adapter() });
const props={
    blogs:{
        title: "Microsoft Office",
        body: "3\n\n\n1\nI have a reducer named \"leagues\" in the redux state tree, which is just an array of individual league objects. Each league has a unique id (assigned in the backend), and a name.\n\nI'm trying to write a Component that represents an individual league, and so I want to have a mapStateToProps function that retrieves the correct league. The correct league is known from the url, that is, through the match prop in react-router-v4.\n\nI tried:",
        "author": "Frank",
        "comment": [
       {
         "email": "vincent@gmail.com",
         "comment": "test"
       },
       {
         "email": "ypapy22@gmail.com",
         "comment": "12"
       }]
     },
     auth: true,
     match:{
        params:{blog_id:1}
},
getCommentAction:jest.fn(),
commentAction:jest.fn()
}
test('Testing comments component ', () => {
const wrapper= shallow(<Comments {...props}/>)
// expect(wrapper.find('form').length).toEqual(1)
expect(wrapper.find(Card).length).toEqual(0)
expect(wrapper.find('form').length).toEqual(1)
expect(wrapper.find(Typography).length).toEqual(0)
expect(wrapper.find(TextField).length).toEqual(2)
expect(wrapper.find(Button).length).toEqual(1)
});
test('Testing comments component when not logged in ', () => {
    const prop = props
    prop.auth=false
    const wrapper= shallow(<Comments {...props}/>)
    expect(wrapper.find('form').length).toEqual(1)
    expect(wrapper.find(Typography).length).toEqual(0)
    expect(wrapper.find(TextField).length).toEqual(2)
    expect(wrapper.find(Button).length).toEqual(1)
});