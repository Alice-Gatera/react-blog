

const initState = {
    auth: false
}
const authReducer = (state=initState, action)=>{
    switch (action.type) {
        case 'SIGNUP_USER':
            return state
        case 'LOGIN_USER':
            return {
                ...state,
                auth: action.auth
            }
        case 'LOGOUT':
            return {
                ...state,
                auth: action.auth
            }
        default:
            return state
    }
}
export default authReducer;
