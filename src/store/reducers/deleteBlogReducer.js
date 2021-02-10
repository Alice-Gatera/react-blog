const initState= {
    message: null,
    error:null
}

const deleteBlogReducer = (state= initState, action) => {
switch (action.type){
    case 'DELETE-BLOG-Success' :
        return{ message:action.payload, error:null}
    case 'DELETE-BLOG-Fail' :
        return{ message:null, error:action.payload}
    default:
         return state
}

 }

export default deleteBlogReducer