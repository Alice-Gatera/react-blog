import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import SignIn from './SignIn'
import SignUp from './SignUp'
import UpdateBlog from './UpdateBlog'
import {  useSelector} from 'react-redux'


function App() {
  // const auth= useSelector( state=> state.auth )
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={ Home }/> 
            <Route path="/create" component={ Create} />
            <Route exact path="/blogs/:id" component = {BlogDetails}/>
            <Route path="/blogs/edit/:id" component ={ UpdateBlog}/>
            <Route path="/login" component ={SignIn}/> 
            {/* <Route path="/signup"> <SignUp /></Route> */}
            <Route path="*" component={NotFound} />
             </Switch>
        </div>
      </div>
    </Router>
  );
}
// const mapStateToProps = (state) =>{
//   return{
//     isLoggedIn:state.isLoggedIn
//   }
// }
 
export {App}
export default App;