import { Component } from "react";
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { logout } from '../src/store/actions/authActions'



class Navbar extends Component{

 
    handleClick = (e) => {
       this.props.logUserOut();
    }
   
  render() {
    // const {auth} = this.props;
    const auth= localStorage.getItem('token')
  
  
    return (
        <nav className="navbar">
            <div className="link">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link> 
                 <Link to='/contact'>Contact</Link>
                {/* <Link to='/blogs'>Blogs</Link>  */}
                {!auth &&<Link to='/signup'>Sign up</Link>}
                {!auth && <Link to='/login'>Login</Link>}
                {auth && <Link to='/create'>New blog</Link>}
                {auth && <a  href="/" onClick={this.handleClick}>Logout</a>}
            </div>
        </nav>
     );
  }
}
const mapStateToProps = state=>{
    return{
        auth: state.auth.auth
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        logUserOut: ()=> dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);