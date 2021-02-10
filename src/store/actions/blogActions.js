import axios from 'axios'

export const createBlog = ( blog ) => {
    return((dispatch) => {
        //api call
        axios.post('http://localhost:8000/blogs', blog)
          .then((res)=>{
            console.log('added',res.data);
            dispatch({type:'CREATE-BLOG-Success', payload:blog})
        }).catch((err)=>{
            console.log('failed to add', err);
            dispatch({type:'CREATE-BLOG-fail', payload:err})
        })
        //make async call to database
        // dispatch({type:'CREATE-BLOG', blog:blog})   
    }) 
}

export const deleteBlog = (id) =>{
    return((dispatch) =>{
        axios.delete('http://localhost:8000/blogs/' +id)
        .then(()=>{
            console.log('blog deleted successifuly');
            dispatch({type:'DELETE-BLOG-Success', payload: 'blog deleted successifuly'})
        }).catch((err) =>{
            console.log('fail to delete', err);
            dispatch({type: 'DELETE-BLOG-Fail', payload:err})
        })
    })
}
 