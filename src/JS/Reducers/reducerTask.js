
import { ADD_ITEM } from "../Constants/actionsTypes";
import { EDIT_ITEM,DONE_ITEM } from "../Constants/actionsTypes";
const initialState={
    listItem:[]
    
};

export const reducerTask = (state=initialState,action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {...state,listItem:[...state.listItem,action.payload]}

         case EDIT_ITEM:
             return {...state,
            listItem:state.listItem.map((el) => 
            el.id===action.payload.id ? {...el,text:action.payload.text } : el),
        } 
          case DONE_ITEM:
              return {...state,listItem:state.listItem.map((el) => 
               el.id===action.payload ? {...el,done:!el.done} : el 
                )}

        
    
        default:
            return state;
            }
}
