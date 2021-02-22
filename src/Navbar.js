import { Component } from "react";
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { logout } from '../src/store/actions/authActions'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Tabs, makeStyles, Typography} from '@material-ui/core'





// const useStyles = makeStyles(theme => ({
//     navbar: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//     },
  
//   }))

{/* <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar> */}



class Navbar extends Component{

    handleClick = (e) => {
       this.props.logUserOut();
    }
   
  render() {
    // const {auth} = this.props;
    const auth= localStorage.getItem('token')
  
    //   const classes = useStyles()
    return (
      
        <AppBar position="static" color="#b0bec5" >
        <Toolbar variant="h10" className="navbar" color=" #b0bec5">
               <Typography ><Link to='/'>Home</Link></Typography> 
                <Typography><Link to='/about'>About</Link></Typography> 
                 <Typography><Link to='/contact'>Contact</Link></Typography>
                {/* <Link to='/blogs'>Blogs</Link>  */}
                {/* {!auth &&<Link to='/signup'>Sign up</Link>} */}
                <Typography>{!auth && <Link to='/login'>Login</Link>}</Typography>
               <Typography> {auth && <Link to='/create'>New blog</Link>}</Typography>
                <Typography>{auth && <a  href="/" onClick={this.handleClick}>Logout</a>}</Typography>
            </Toolbar>
        </AppBar>
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
export{Navbar}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);