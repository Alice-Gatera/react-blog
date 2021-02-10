import { useParams} from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory, Link } from "react-router-dom";
import {useDispatch, connect} from 'react-redux'
import { deleteBlog } from '../src/store/actions/blogActions'
import { signIn } from '../src/store/actions/authActions'
import { useSelector} from 'react-redux'



const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
const dispatch= useDispatch()
  const handleDelete = (e) =>{
    e.preventDefault()
    // fetch('http://localhost:8000/blogs/' + id, {
    //   method: 'DELETE'

    // }).then(()=>{
    //   history.push('/');
    // })
    dispatch (deleteBlog(id))
        history.push('/');

  }
  // const auth= useSelector( state=> state.auth )
  const auth= this.props()

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
        </article>
       
      )}
      {auth ? <div>
      {blog && <button onClick={handleDelete}>Delete</button>}
      {blog && <Link to ={`/blogs/edit/${blog.id}`}>Edit</Link>}
      </div> : <div><p>Share</p></div>} 
   

    </div>
  );
}
const mapStateToProps = (state, ownProps)=>{
  return{
    
      auth: state.auth.auth

  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
      deleteBlog: (id)=> dispatch(deleteBlog(id))
  }
}
 
export default connect (mapStateToProps,mapDispatchToProps) (BlogDetails);
