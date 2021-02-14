import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/store/actions/blogActions';

import moxios from 'moxios'

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const payload ={
  title: "kigali",
  snippet: "kigali",
  body: "kigali",
  author: "Alice",
  comment: [],
  id: 9
}

let store;
describe('blog  actions', () => {
 

  beforeEach(() => {
    moxios.install()
    store = mockStore({createBlog: {}})
    // console.log(store ,'======/');
  })
  afterEach(() => moxios.uninstall())



it('Creates  Blog  successful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 200,
       response: {
          blogs: {
            blogs: payload
          }
       }
       })
    })

    return store.dispatch(actions.createBlog()).then(() => {
      const expectedActions = store.getActions();
      // expect(expectedActions[0].type).toEqual('CREATE-BLOG-FAIL')
      expect(expectedActions[0].type).toEqual('CREATE-BLOG-Success')
    })
  })

  it(' should not create  Blog  successful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 400,
       response: {
          error: 'blog not created'
       }
       })
    })

    return store.dispatch(actions.createBlog()).then(() => {
      const expectedActions = store.getActions();
      // expect(expectedActions[0].type).toEqual('CREATE-BLOG-FAIL')
      expect(expectedActions[0].type).toEqual('CREATE-BLOG-FAIL')
    })
  })

  })
describe('blog  actions', () => {
 

  beforeEach(() => {
    moxios.install()
    store = mockStore({deleteBlog: {}})
    // console.log(store ,'======/');
  })
  afterEach(() => moxios.uninstall())



it('delete Blog  successful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 200,
       response: {
          blogs: {
            blogs: payload
          }
       }
       })
    })

    return store.dispatch(actions.deleteBlog()).then(() => {
      const expectedActions = store.getActions();
      // expect(expectedActions[0].type).toEqual('CREATE-BLOG-FAIL')
      expect(expectedActions[0].type).toEqual('DELETE-BLOG-Success')
    })
  })

  
  it(' should delete Blog  unsuccessful', () => {
  
      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
         status: 400,
         response: {
           error: 'Blog not deleted'
         }
         })
      })
  
      return store.dispatch(actions.deleteBlog()).then(() => {
        const expectedActions = store.getActions();
        // expect(expectedActions[0].type).toEqual('CREATE-BLOG-FAIL')
        expect(expectedActions[0].type).toEqual('DELETE-BLOG-Fail')
      })
    })
  
    })