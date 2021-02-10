import { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useParams} from "react-router-dom";
import { connect,  useDispatch} from 'react-redux'
import { createBlog} from '../src/store/actions/blogActions'
import useFetch from "./useFetch";
import axios from 'axios'



const UpdateBlog = () => {
  const history = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState('loading');
  const [snippet, setSnippet] = useState('loading');
  const [body, setBody] = useState('loading');
  const [author, setAuthor] = useState('loading');
  
  const dispatch = useDispatch()
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
   useEffect(()=>{
       axios.get(`http://localhost:8000/blogs/${id}`).then((res)=>{
          
           console.log( res.data);
           setTitle(res.data.title)
           setSnippet(res.data.snippet)
           setBody(res.data.body)
           setAuthor(res.data.author)
       })
   },[])
   


  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title,snippet, body, author };
    // dispatch (createBlog(blog)) 
    // history.push('/');


    fetch('http://localhost:8000/blogs/' +id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Edit a Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Descriptio</label>
        <input type="text" required value={snippet} onChange={(e) => setSnippet(e.target.value)}/>
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Alice">Alice</option>
          <option value="Gatera">Gatera</option>
          <option value="niwe">Niwemutoni</option>
        </select>
        <button>Update Blog</button>
      </form>
    </div>
  );
}
//  const mapDispatchToProps =() =>{
//    return{
//      createBlog:(blog) => dispatchEvent(createBlog(blog))
//    }
//  }
export default UpdateBlog