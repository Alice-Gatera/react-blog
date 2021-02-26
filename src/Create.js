import { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect,  useDispatch} from 'react-redux'
import { createBlog} from '../src/store/actions/blogActions'

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';




const Create = () => {
  

  const [info, setInfo] = useState({
    title: '',
    snippet: '',
    body:'',
    author:'Alice',
})


const handleChange = ({ target: { name, value } }) => {
    let temp = { ...info }
    temp[name] = value
    setInfo(temp)
}
  const history = useHistory();
  // const dispatch = useDispatch()
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = info;
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
        name='title'
          type="text" 
          required 
          value={info.title}
          onChange={handleChange}
        />
        <label>Blog Descriptio</label>
        <input type="text" name='snippet' required value={info.snippet} onChange={handleChange}/>
        <label>Blog body:</label>
        <textarea
          required
          value={info.body}
          name='body'
          onChange={handleChange}
        ></textarea>
        <label>Blog author:</label>
        <select
        name='author'
          value={info.author}
          onChange={handleChange}
        >
          <option value="Alice">Alice</option>
          <option value="Gatera">Gatera</option>
          <option value="niwe">Niwemutoni</option>
        </select>
        <button type='submit'>Add Blog</button>
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

