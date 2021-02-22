import { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect,  useDispatch} from 'react-redux'
import { createBlog} from '../src/store/actions/blogActions'

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';




const Create = () => {
  const [title, setTitle] = useState('');
  const [snippet, setSnippet] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Alice');
  const history = useHistory();
  // const dispatch = useDispatch()
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title,snippet, body, author };
    // dispatch (createBlog(blog)) 
    history.push('/');


    // fetch('http://localhost:8000/blogs/', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(blog)
    // }).then(() => {
    //   // history.go(-1);
    //   history.push('/');
    // })
  }

  return (
    <Card className="create">
      <Typography>Add a New Blog</Typography>
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
        <button>Add Blog</button>
      </form>
    </Card>
  );
}
 const mapDispatchToProps =() =>{
   return{
     createBlog:(blog) => dispatchEvent(createBlog(blog))
   }
 }
 export{Create}
export default connect(null, mapDispatchToProps)(Create);

