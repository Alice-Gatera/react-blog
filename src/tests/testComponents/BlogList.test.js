import BlogList from '../../BlogList';
import {shallow,mount} from 'enzyme';
import Comments from '../../Comments'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });
const props={
    blogs:[{
      id:1,
               title: "React",
               snippet:" Aprogramming language",
               body: "3\n\n\n1\nI have a reducer named \"leagues\" in the redux state tree, which is just an array of individual league objects. Each league has a unique id (assigned in the backend), and a name.\n\nI'm trying to write a Component that represents an individual league, and so I want to have a mapStateToProps function that retrieves the correct league. The correct league is known from the url, that is, through the match prop in react-router-v4.\n\nI tried:",
               "author": "Frank",
               "comment": [
              {
                "email": "sheja@gmail.com",
                "comment": "test"
              },
              {
                "email": "kaliza@gmail.com",
                "comment": "12"
              }]
            },
            {
              id:2,
              title: "React",
              snippet:" Aprogramming language",
              body: "3\n\n\n1\nI have a reducer named \"leagues\" in the redux state tree, which is just an array of individual league objects. Each league has a unique id (assigned in the backend), and a name.\n\nI'm trying to write a Component that represents an individual league, and so I want to have a mapStateToProps function that retrieves the correct league. The correct league is known from the url, that is, through the match prop in react-router-v4.\n\nI tried:",
              "author": "Frank",
              "comment": [
             {
               "email": "sheja@gmail.com",
               "comment": "test"
             },
             {
               "email": "kaliza@gmail.com",
               "comment": "12"
             }]
           },],
            
    auth: true,
    // match:{
    //     params:{blog_id:1}
    // },
    // deleteBlog:jest.fn(),

}
test('Testing blogDetails component ', () => {
    const wrapper= shallow(<BlogList {...props}/>)
    expect(wrapper.find('p').length).toEqual(2)
    expect(wrapper.find('h2').length).toEqual(2)
    // expect(wrapper.find('h2').length.toBe('React')
    expect(wrapper.find(Card).length).toEqual(1)
    // expect(wrapper.find(Typograpgy).length).toEqual(1)
    expect(wrapper.find(CardContent).length).toEqual(1)
    expect(wrapper.find(CardActionArea).length).toEqual(1)
    // expect(wrapper.find(Comments).length).toEqual(1)
    expect(wrapper.find('Link').length).toEqual(2)
});
// test('Testing blogDetails component when loggedout', () => {
//     const prop = props
//     prop.auth=false
//     const wrapper= shallow(<BlogDetails {...prop}/>)
//     expect(wrapper.find('div').length).toEqual(2)
//     expect(wrapper.find('p').length).toEqual(1)
//     expect(wrapper.find('h2').length).toEqual(1)
//     expect(wrapper.find('h2').text()).toBe('React')
//     expect(wrapper.find(Card).length).toEqual(0)
//     expect(wrapper.find(CardContent).length).toEqual(0)
//     expect(wrapper.find(CardActions).length).toEqual(0)
//     expect(wrapper.find(Button).length).toEqual(0)
//     expect(wrapper.find(Comments).length).toEqual(1)
//     expect(wrapper.find('Link').length).toEqual(0)
// });