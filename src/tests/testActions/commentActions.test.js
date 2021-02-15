import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/store/actions/commentActions';

import moxios from 'moxios'

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const payload ={
  title: "Testing",
  snippet: "testing 1",
  body: "testing testinggggggg",
  author: "Alice",
  comment: [
    {
      email: "sheja@gmail.com",
      comment: "nice"
    },
  ],
  id: 8
} 
const comment= {email:"alicegatera@gmail.com", comment:'nice'}
const newBlog  = payload.comment.push(comment)
const newComment = [ {
  email: "kaliza@gmail.com",
  comment: "fantastic"
},
{
  email: "kaliza@gmail.com",
  comment: "fantastic"
},]
let store;
describe('comment  actions', () => {
 
  beforeEach(() => {
    
    moxios.install()
    store = mockStore({commentAction: {}})
    // console.log(store ,'======/');
  })
  afterEach(() => moxios.uninstall())

it('posts  Blog  comment successful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 200,
       response: {
          blogs: {
            blogs: newBlog
          }
       }
       })
    })
    return store.dispatch(actions.commentAction(payload, comment)).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('ADD_COMMENT')
    })
  })
  it('should get  blog  comment', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 200,
       response: newComment
         
      
       })
    })
    return store.dispatch(actions.getCommentAction()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('GET_COMMENT')
    })
  })


})