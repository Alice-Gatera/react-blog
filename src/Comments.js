import { Component, useHistory } from "react";
import {commentAction} from './store/actions/commentActions'
import {connect} from 'react-redux'

class Comments extends Component  {

    state = {
        email: '',
        comment: '',
        postId: this.props.postId
    }
    handleChange = (e)=>{
       this.setState({
           [e.target.id]:e.target.value
       })
    };
    handleSubmit = (e)=>{
        e.preventDefault();
       const comment ={
           email:this.state.email,
           comment:this.state.comment,
           postId:this.state.postId
       }
       const { blog }= this.props
    this.props.commentAction(blog, comment);
    console.log(blog);
    }
    render() {
        return (
            <div className="comment">
                <form >
                     <div className="input-field1">
                     <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={this.state.email} placeholder="" required onChange={this.handleChange}/>
                    </div>
                    <div className="input-field1">
                    <label htmlFor="comment"> Comment </label>
                    <input id='comment' onChange={this.handleChange} value={this.state.comment} required />
                    </div>
                    <div className="input-field1">
                    <a href='' type="submit" onClick= {this.handleSubmit}>Comment</a>
                    </div>
                </form>
            </div>
         );
    }
}
export{Comments}
export default connect(null,{commentAction})(Comments);


















