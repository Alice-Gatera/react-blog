import Navbar from '../../src/Navbar';
// import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
// import Home from '../components/Home';
// import About from '../components/About';
// import Contact from '../components/Contact';
// import CreateBlog from '../components/blogs/CreateBlog';
import NotFound from '../../src/NotFound';
// import BlogList from '../components/blogs/BlogList';
// import BlogDetails from '../components/blogs/BlogDetails';
// import UpdateBlog from '../components/blogs/UpdateBlog';
// import Login from '../components/auth/Login';
// import SignUp from '../components/auth/SignUp';
// import {useDispatch} from 'react-redux'
// import { fetchBlogs } from './store/actions/blogActions';
// import {useEffect} from 'react'
import {App} from '../App'
import {shallow,mount} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
Enzyme.configure({ adapter: new Adapter() });

test('Testing  App Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Navbar).length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(2);
    expect(wrapper.find('Route').length).toEqual(6);
    expect(wrapper.find('Switch').length).toEqual(1);
    expect(wrapper.find(NotFound).length).toEqual(0);
  });