import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/store/actions/authActions';

import moxios from 'moxios'

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const payload =[
    {
      email: "sheja@gmail.com",
      password: "sheja123",
      firstName: "Sheja",
      lastName: "Mael",
      id: 1
    },
  
]

let store;
const cred = {
    email: "sheja@gmail.com",
     password: "sheja123"
}
describe('authentication actions', () => {
 

  beforeEach(() => {
    moxios.install()
    store = mockStore({auth: {}})
    // console.log(store ,'======/');
  })
  afterEach(() => moxios.uninstall())



it('should  login successful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 200,
       response: payload
       })
    })

    return store.dispatch(actions.signIn(cred)).then(() => {
      const expectedActions = store.getActions();
      // expect(expectedActions[0].type).toEqual('CREATE-BLOG-FAIL')
      expect(expectedActions[0].type).toEqual('LOGIN_USER')
      expect(expectedActions[0].auth).toEqual(true)
    })
  })

  it('should  not  login successful', () => {
const falseCred ={
    email: "shejagmail.com",
    password: "sheja123"
}
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
       status: 200,
       response: payload
       })
    })

    return store.dispatch(actions.signIn(falseCred)).then(() => {
      const expectedActions = store.getActions();
      // expect(expectedActions[0].type).toEqual('CREATE-BLOG-FAIL')
      expect(expectedActions[0].type).toEqual('LOGIN_USER')
      expect(expectedActions[0].auth).toEqual(false)
    })
  })

//   it(' should not create  Blog  successful', () => {

//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent()
//       request.respondWith({
//        status: 400,
//        response: {
//           error: 'blog not created'
//        }
//        })
//     })

//     return store.dispatch(actions.createBlog()).then(() => {
//       const expectedActions = store.getActions();
//       // expect(expectedActions[0].type).toEqual('CREATE-BLOG-FAIL')
//       expect(expectedActions[0].type).toEqual('CREATE-BLOG-FAIL')
//     })
//   })

//   })
// describe('blog  actions', () => {
 

//   beforeEach(() => {
//     moxios.install()
//     store = mockStore({deleteBlog: {}})
//     // console.log(store ,'======/');
//   })
//   afterEach(() => moxios.uninstall())



// it('delete Blog  successful', () => {

//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent()
//       request.respondWith({
//        status: 200,
//        response: {
//           blogs: {
//             blogs: payload
//           }
//        }
//        })
//     })

//     return store.dispatch(actions.deleteBlog()).then(() => {
//       const expectedActions = store.getActions();
//       // expect(expectedActions[0].type).toEqual('CREATE-BLOG-FAIL')
//       expect(expectedActions[0].type).toEqual('DELETE-BLOG-Success')
//     })
//   })

  
//   it(' should delete Blog  unsuccessful', () => {
  
//       moxios.wait(() => {
//         const request = moxios.requests.mostRecent()
//         request.respondWith({
//          status: 400,
//          response: {
//            error: 'Blog not deleted'
//          }
//          })
//       })
  
//       return store.dispatch(actions.deleteBlog()).then(() => {
//         const expectedActions = store.getActions();
//         // expect(expectedActions[0].type).toEqual('CREATE-BLOG-FAIL')
//         expect(expectedActions[0].type).toEqual('DELETE-BLOG-Fail')
//       })
//     })
  
    })