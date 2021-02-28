import blogReducer from '../../../src/store/reducers/blogReducer'
import deleteBlogReducer from '../../store/reducers/deleteBlogReducer'
import rootReducer from '../../store/reducers/rootReducer'

 const initState ={
    data:null,
    error : null
}

const blog ={
    
        title: "Testing",
        snippet: "testing 1",
        body: "testing testinggggggg",
        author: "Alice",
        id: 8
      
}

describe('testing blog reducer', ()=>{
    it('should create blog successiful', ()=>{
        const action ={
            type:'CREATE-BLOG-Success', 
            payload:blog
        }
        const reducer = blogReducer(initState, action)
        expect(reducer.data).toBe(blog)
    })
    it('should  fail to create blog successiful', ()=>{
        const action ={
            type:'CREATE-BLOG-FAIL', 
            payload:'blog not created'
        }
        const reducer = blogReducer(initState, action)
        expect(reducer.data).toBe(undefined)
        expect(reducer.error).toBe('blog not created')
    })

    // it('Should fail  to create blog', () => {
    //     expect(blogReducer(undefined, {
    //      type: 'CREATE-BLOG-FAIL',
    //      error: 'blog  not created'
        
    //     })
    //     )
    // })
//     it('should delete a blog', ()=>{
// expect (blogReducer(undefined, {
//     type:'DELETE-BLOG-Success',
//      payload: 'blog deleted successifuly'
// }))

//     })
    // it('should not delete a blog',()=>{
    //     expect(blogReducer(undefined,{
    //         type: 'DELETE-BLOG-Fail',
    //          error: 'blog not deleted'
    //     }))
    // })
    it('should delete blog  successiful', ()=>{
        const action ={
            type:'DELETE-BLOG-Success',
            payload: 'blog deleted successifuly'
        }
        const reducer = deleteBlogReducer(initState, action)
        expect(reducer.message ).toBe('blog deleted successifuly')
        expect(reducer.error).toBe(null)
    
    

})
it('should  fail to delete blog ', ()=>{
    const action ={
        type:'DELETE-BLOG-Fail',
        payload: 'blog not deleted'
    }
    const reducer = deleteBlogReducer(initState, action)
    expect(reducer.message ).toBe(null)
    expect(reducer.error).toBe('blog not deleted')



})
it('should  fail to delete blog ', ()=>{
    const action ={
        type:'InitBlog',
        
    }
    const reducer = blogReducer(initState, action)
    expect(reducer ).toBe(initState)



})

it('should  fail to delete blog ', ()=>{
    const action ={
        type:'InitBlog',
        
    }
    const reducer = deleteBlogReducer(initState, action)
    expect(reducer ).toBe(initState)

})
it('test root reducer',()=>{
    console.log(rootReducer);
})

})