

import {Create} from '../../Create'
import {shallow,mount} from 'enzyme';
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button'
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
CreateBlog:jest.fn(),
commentAction:jest.fn()
}
test('Testing createBlog component ', () => {
const wrapper= shallow(<Create {...props}/>)
// expect(wrapper.find('form').length).toEqual(1)
expect(wrapper.find('div').length).toEqual(1)
expect(wrapper.find('form').length).toEqual(1)
expect(wrapper.find('h2').length).toEqual(1)
expect(wrapper.find('select').length).toEqual(1)
expect(wrapper.find('label').length).toEqual(3)
expect(wrapper.find('option').length).toEqual(4)
expect(wrapper.find(TextField).length).toEqual(2)
expect(wrapper.find(Button).length).toEqual(1)
expect(wrapper.find(Navbars).length).toEqual(1);  
//   });

// test('Testing  Navbar Component when looged in', () => {
//     const wrapper = shallow(<Navbar {...props} />);
//     expect(wrapper.find('div').length).toEqual(1);  
//     expect(wrapper.find('nav').length).toEqual(1);  
//     expect(wrapper.find('ul').length).toEqual(1);  
//     expect(wrapper.find('li').length).toEqual(1);  
//     expect(wrapper.find(NavLink).length).toEqual(2);  
//     expect(wrapper.find(LoggedinLink).length).toEqual(1);  
// });

// test('Testing Post component when loggout', () => {
//     const prop=props;
//     prop.token=null;
//     const wrapper= shallow(<Post {...prop}/>)
//     expect(wrapper.find('div').length).toEqual(2)
//     expect(wrapper.find('p').length).toEqual(1)
//     expect(wrapper.find('h1').length).toEqual(1)
//     expect(wrapper.find(Comment).length).toEqual(1)
//     expect(wrapper.find('h5').text()).toBe('Comments')
//     expect(wrapper.find(Link).length).toEqual(0)
//     expect(wrapper.find("button").length).toEqual(0)
// });
// test('Testing  Navbar Component when logged out', () => {
//     const prop=props;
//     prop.token=null;
//     const wrapper = shallow(<Navbar {...prop} />);
//     expect(wrapper.find('div').length).toEqual(1);  
//     expect(wrapper.find('nav').length).toEqual(1);  
//     expect(wrapper.find('ul').length).toEqual(1);  
//     expect(wrapper.find('li').length).toEqual(1);  
//     expect(wrapper.find(NavLink).length).toEqual(2);  
//     expect(wrapper.find(LoggedoutLinks).length).toEqual(1);  
// });

// test('Testing  LoggedinLinks', () => {
//     const wrapper = shallow(<LoggedinLinks {...props} />); 
//     expect(wrapper.find('ul').length).toEqual(1);  
//     expect(wrapper.find('li').length).toEqual(2);  
//     expect(wrapper.find(NavLink).length).toEqual(1);  
//     expect(wrapper.find('a').length).toEqual(1);  
// });

// test('Testing  LoggedoutLinks', () => {
//     const wrapper = shallow(<LoggedoutLinks/>); 
//     expect(wrapper.find('ul').length).toEqual(1);  
//     expect(wrapper.find('li').length).toEqual(1);  
//     expect(wrapper.find(NavLink).length).toEqual(1);  
// });

// test('Testing the login compoment', () => {
//     const prop=props;
//     prop.token=null;
//     const wrapper= shallow(<Login {...prop}/>)
//     expect(wrapper.find('input').length).toEqual(2);
//     expect(wrapper.find('label').length).toEqual(2);
//     expect(wrapper.find('button').length).toEqual(1);
// });

// test('it should show Home compoment with the post in it if any  ', () => {
//     const wrapper= shallow(<Home {...props}/>)
//     expect(wrapper.find(Link).length).toEqual(1);
//     expect(wrapper.find('div').length).toEqual(3);
//     expect(wrapper.find('span').length).toEqual(1);
//     expect(wrapper.find('p').length).toEqual(1);
// });
})
