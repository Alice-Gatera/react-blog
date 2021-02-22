import Create from '../../Create'
import {shallow,mount} from 'enzyme';
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button'
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import {act} from 'react-dom/test-utils'
import Navbar from '../../Navbar'
import { BrowserRouter as Router } from "react-router-dom";


const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store;
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
  store = mockStore({
    blogs: props,
  });
 const wrapper = mount(<Provider store={store}><Create  {...props}/></Provider>)
 console.log("this is the.....",wrapper )
expect(wrapper.find('div').length).toEqual(1)
expect(wrapper.find('form').length).toEqual(1)
expect(wrapper.find('h2').length).toEqual(0)
expect(wrapper.find('select').length).toEqual(1)
expect(wrapper.find('label').length).toEqual(4)
expect(wrapper.find('option').length).toEqual(3)
expect(wrapper.find(TextField).length).toEqual(0)
expect(wrapper.find(Button).length).toEqual(0)
expect(wrapper.find(Navbars).length).toEqual(1);  
  });


  describe('Functionalities', () => {
    it('should call onSubmit o', () => {
        
      const onSubmit = jest.fn();
      const component = mount(<Router><Create onSubmit={onSubmit} {...props} values="custom value" /></Router>);
      act( () => {   
          component.find('[type="submit"]').first().simulate('click');
      })
  
  });
})