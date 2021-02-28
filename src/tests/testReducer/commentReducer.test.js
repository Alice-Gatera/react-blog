import commentReducer from '../../store/reducers/commentReducer'

 const initState =[]

 describe('testing comment  reducer', ()=>{
    it('should create a comment  successiful', ()=>{
        const action ={
            type:'ADD_COMMENT', 
          author:'email',
          comment:'comment'
        }
        const reducer = commentReducer(initState, action)
        console.log(reducer.undefined[0]);
        expect(reducer.undefined[0].text).toBe('comment')
        expect(reducer.undefined[0].user).toBe('email')
    })
    it('should test default', ()=>{
        const action ={
            type:'WHAT' 

        }
        const reducer = commentReducer(initState, action)
        console.log(reducer.undefined[0]);
        // expect(reducer.undefined[0].text).toBe('comment')
        // expect(reducer.undefined[0].user).toBe('email')
    })

    it('should  fail to delete blog ', ()=>{
        const action ={
            type:'InitBlog',
            
        }
        const reducer = commentReducer(initState, action)
        expect(reducer ).toBe({"undefined": []})
    
    
    
    })
 })

 


