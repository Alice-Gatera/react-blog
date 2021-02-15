import axios from 'axios'
export const ADD_COMMENT = "ADD_COMMENT"
export const GET_COMMENT = "GET_COMMENT"

export const commentAction = (blog, comment)=>dispatch=>{
    console.log("here in blog", blog)
    blog.comment.push(comment);
   return axios.put(`http://localhost:8000/blogs/${blog.id}`, blog).then(data=>{
        dispatch({
            type: "ADD_COMMENT",
            blog
        })
   })
// console.log(blog)
}
export const getCommentAction = (comment)=>dispatch=>{
//    setTimeout(() => {
  return  fetch('http://localhost:8000/comments')
    .then(res=>res.json())
    .then(data=>{
        dispatch({
        type:'GET_COMMENT',
        payload:data
    })
    console.log(data)})
    .catch(error=> console.log(error.message))
//    }, 1000);
}
