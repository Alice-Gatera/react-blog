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
    test('CREATE-BLOG-Success', ()=>{
        const action ={
            type:'CREATE-BLOG-Success', 
            payload:blog
        }
        const reducer = blogReducer(initState, action)
        expect(reducer.data).toBe(blog)
    })
    test ('CREATE-BLOG-fail', ()=>{
        const action ={
            type:'CREATE-BLOG-fail',
             payload:err
        }
        const reducer = blogReducer(initState, action)
        expect(reducer.err).toBe(err)
    })
})