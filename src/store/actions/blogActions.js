import axios from 'axios'

export const createBlog = ( blog ) => {
    return((dispatch) => {
        //api call
         return axios.post('http://localhost:8000/blogs', blog)
          .then((res)=>{
            console.log('added',res.data);
            dispatch({type:'CREATE-BLOG-Success', payload:blog})
        }).catch((err)=>{
            console.log('failed to add', err);
            dispatch({type:'CREATE-BLOG-FAIL', error:err})
        })
           
    }) 
}

export const deleteBlog = (id) =>{
    return((dispatch) =>{
       return axios.delete('http://localhost:8000/blogs/' +id)
        .then(()=>{
            console.log('blog deleted successifuly');
            dispatch({type:'DELETE-BLOG-Success', payload: 'blog deleted successifuly'})
        })
        .catch((err) =>{
            console.log('fail to delete', err);
            dispatch({type: 'DELETE-BLOG-Fail', payload:err})
        })
    })
}
 