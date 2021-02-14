import blogReducer from '../../../src/store/reducers/blogReducer'

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

    it('Should fail  to create blog', () => {
        expect(blogReducer(undefined, {
         type: 'CREATE-BLOG-FAIL',
         error: 'blog  not created'
        
        })
        )
    })
    it('should delete a blog', ()=>{
expect (blogReducer(undefined, {
    type:'DELETE-BLOG-Success',
     payload: 'blog deleted successifuly'
}))

    })
    it('should not delete a blog',()=>{
        expect(blogReducer(undefined,{
            type: 'DELETE-BLOG-Fail',
             error: 'blog not deleted'
        }))
    })
    

})

