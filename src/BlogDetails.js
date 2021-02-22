import { Component } from "react";
import Comments from "./Comments";
import { connect } from 'react-redux';
import { deleteBlog } from '../src/store/actions/blogActions';
import { Link } from "react-router-dom";
import CommentBlog from './CommentBlog'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
class BlogDetails extends Component {
    handleClick = ()=>{
        this.props.deleteBlog(this.props.blogs.id);
        this.props.history.push('/blogs');
    }
    render(){
        const {blogs} = this.props;
        {blogs && console.log(blogs)}

        const { auth }= this.props;
        return (
            <div className="blog-details">
                {blogs && (
                    <article>
                        <h2>{blogs.title}</h2>
                        <div>{blogs.body}</div>
                        <p>Writen by {blogs.author}</p>
                        {auth &&<Button startIcon={<DeleteIcon/>} variant="contained" color="primary" onClick={this.handleClick}>delete</Button>}
                        {auth && <Button> <Link to ={`/edit/${blogs.id}`}>Edit</Link></Button>}
                        <Comments blog= {blogs}/>
                        <CommentBlog comments= {blogs.comment} />
                    </article>
                )}
            </div>
         );
    }
    }
    const mapStateToProps = (state, ownProps)=>{
        const id = ownProps.match.params.id;
        return {
            blogs: state.blog.blogs.find(blog=> blog.id==id),
            

            auth: state.auth.auth
        }
    }
    const mapDispatchToProps = (dispatch)=>{
        return {
            deleteBlog: (id)=> dispatch(deleteBlog(id))
        }
    }
export {BlogDetails}
export default connect(mapStateToProps, mapDispatchToProps)(BlogDetails);

















