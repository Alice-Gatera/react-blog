import authReducer from '../../../src/store/reducers/authReducer'

const initState = {
    auth: false
}
describe (' testing auth reducer', ()=>{


  
    test('LOGIN_USER',()=>{
        const action =  {
        type: 'LOGIN_USER',
        auth: true}
        const reducer =authReducer(initState, action)
        expect(reducer.auth).toBe(true)
    })
    test('LOGIN_USER', ()=>{
        const action ={
            type: 'LOGIN_USER',
            auth: false
        }
        const reducer =authReducer(initState, action)
        expect(reducer.auth).toBe(false)
    })
    test ('LOGOUT', ()=>{
        const action ={
            type: 'LOGOUT',
            auth: false
        }
        const reducer = authReducer(initState, action)
        expect(reducer.auth).toBe(false)
    })
    test ('LOOGOUT', ()=>{
        const action ={
            type: 'LOOGOUT',
            auth: false
        }
        const reducer = authReducer(initState, action)
        expect(reducer.auth).toBe(false)
    })
}) 