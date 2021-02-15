// import { Component } from "react";
// import { connect } from "react-redux";
// import { signUp } from './store/actions/authActions'
// import { Redirect } from "react-router-dom";
// class SignUp extends Component {
//     state = {
//         email: '',
//         password: '',
//         firstName: '',
//         lastName: ''
//     }
//     handleChange = e=>{
//         this.setState({
//             [e.target.id]: e.target.value
//         })
//     }
//     handleSubmit = (e)=>{
//         e.preventDefault();
//         this.props.signUp(this.state);
//     }
//     render() {
//         if(this.props.auth) return <Redirect to='/' />
//         return (
//             <div className="container">
//                 <h2>Sign Up</h2>
//                 <form className='auth-form' onSubmit={this.handleSubmit}>
//                     <div className="input-group">
//                         <label htmlFor="email">Email</label>
//                         <input id='email' type="email" placeholder='' required onChange={this.handleChange}/>
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="password">password</label>
//                         <input id='password' type="password" placeholder='' required onChange={this.handleChange}/>
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="firstName">firstName</label>
//                         <input id='firstName' type="text" placeholder='' required onChange={this.handleChange}/>
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="lastName">lastName</label>
//                         <input id='lastName' type="text" placeholder='' required onChange={this.handleChange}/>
//                     </div>
//                     <div className="input-group">
//                         <button>sign up</button>
//                     </div>
//                 </form>
//             </div>
//          );
//     }
// }
// const mapStateToProps = state=>{
//     return {
//         auth: state.auth.auth
//     }
// }
// const mapDispatchToProps=(dispatch)=>{
//     return {
//         signUp: (userInfo)=> dispatch(signUp(userInfo))
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
