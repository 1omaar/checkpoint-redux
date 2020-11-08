import { ADD_ITEM } from "../Constants/actionsTypes";
import { EDIT_ITEM } from "../Constants/actionsTypes";
import { DONE_ITEM } from "../Constants/actionsTypes";
 export const addItem = (payload) => {
  return {
        type: ADD_ITEM,
        payload
 }
}  
export const editItem = (payload) => {
      return {
            type: EDIT_ITEM,
            payload
     }
    }  
    export const doneItem = (payload) => {
      return {
            type: DONE_ITEM,
            payload
     }
    } 
    