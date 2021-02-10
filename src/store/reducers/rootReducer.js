import authReducer from './authReducer'
import blogReducer from './blogReducer'
import { combineReducers } from 'redux'
import deleteBlogReducer from './deleteBlogReducer'


const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
  deleteBlog : deleteBlogReducer

});

export default rootReducer