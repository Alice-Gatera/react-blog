import { Switch } from "react-router-dom";

function postComments(state = [], action){
    switch(action.type){
        case 'ADD_COMMENT':
            //return the new state with the new comment
            return[...state,{
                user:action.author,
                text:action.comment
            }]
        // case 'REMOVE_COMMENT':
        //     console.log("Removing a comment");
        //     // we need to return the new state without the deleted comment
        //     return [
        //         //from the start to the one we want to delete
        //         ...state.slice(0, action.i),
        //         //after the deleted one, to  the end
        //         ...state.slice(action.i +1)
        //     ]
        
        default:
        return state
    }
}



function comments (state =[], action){
    if(typeof action.id !== 'underfined'){
        return{
            //take the current state

            ...state,
            // overwrite this post with a new one
           [action.id]: postComments(state[action.id], action)
        }
    }
    return state;
}
export default comments