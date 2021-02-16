
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect} from 'react-router-dom'
import { signIn} from '../src/store/actions/authActions'
import TextField from '@material-ui/core/TextField'

import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
class Login extends Component {
  state = {
      email: '',
      password: ''
  }
  handleChange = e=>{
      this.setState({
          [e.target.id]: e.target.value
      })
  }
  handleSubmit = (e)=>{
      e.preventDefault();
      this.props.signIn(this.state);
  }
  render() {
    console.log(this.pro);
      if(this.props.auth) return <Redirect to='/' />
      return (
          <div className="container">
              <h2>Sign in</h2>
              <form className='auth-form' onSubmit={this.handleSubmit}>
                  <div className="input-group">
                      <label htmlFor="email">Email</label>
                      <TextField variant="filled" id='email' type="email" placeholder='' required onChange={this.handleChange}/>
                  </div>
                  <div className="input-group">
                      <label htmlFor="password">password</label>
                      <TextField variant="filled" id='password' type="password" placeholder='' required onChange={this.handleChange}/>
                  </div>
                  <div className="input-group">
                      {/* <button>Login</button> */}
                     
                  <Button type= "submit" startIcon={<SaveIcon />} size="small"
                  variant="contained" color="secondary">Login</Button>
                
                  </div>
              </form>
          </div>
       );
  }
}
const mapStateToProps = state=>{
  return {
      auth: state.auth.auth
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
      signIn: (credentials)=> dispatch(signIn(credentials))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);