import {Component, useEffect} from "react";
import {getCommentAction} from '../src/store/actions/commentActions'
import {connect} from 'react-redux'
import { render } from "@testing-library/react";

class CommentBlog extends Component  {
    
    render(){
    const {comments} = this.props;
    let i=1;
    console.log(comments)
    return (
        <div className="comment-wrapper">
          {comments?
          <div>
            { comments.map(comment=>(
                <div key={i++}>
                    <p>{comment.email}</p>
                    <p>{comment.comment}</p>
                </div>
            ))}
          </div>:<p>no comments found</p>}
        </div>
     );
}
}

export default connect(null,{getCommentAction})(CommentBlog);
