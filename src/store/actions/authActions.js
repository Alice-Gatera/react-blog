import axios from "axios";



export const signIn = (credentials)=>{
   return async (dispatch, getState)=>{
       const response = await axios.get(' http://localhost:8000/user');
       // console.log(response.data[0])
       if(credentials.email===response.data[0].email && credentials.password===response.data[0].password){
    
         
         console.log('match');
           dispatch({
               type: 'LOGIN_USER',
               auth: true
           })
       }else {
           dispatch({
               type: 'LOGIN_USER',
               auth: false
           })
       }
   }
}
export const signUp = (userInfo)=>{
   return async (dispatch, getState)=>{
       await fetch(' http://localhost:8000/user',{
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(userInfo)
       })
       dispatch({
           type: 'SIGNUP_USER'
       })
   }
}
export const logout = ()=>{
   return {
       type: 'LOGOUT',
       auth: false
   }
}