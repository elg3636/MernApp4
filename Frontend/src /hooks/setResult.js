import { postServerData } from '../helper/helper'
import * as Action from '../redux/result_reducer'

/** function to call dispatch function */
export const PushAnswer = (result) => async (dispatch) => {
    /** get value from the user */
    try {
        await dispatch(Action.pushResultAction(result))

    } catch(error){
        console.log(error)
    }


}
/**export const updateResult= (index, checked) => async(dispatch)=>{
    try {
        dispatch(Action.updateResultAction(index, checked))
        
    } catch (error) {
        console.log(error)
    }
} */


export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error)
    }
}
/** custom hook to insert user data  */
export const usePublishResult = (resultData) => {
    const { result, username } = resultData;
    try {
        if (result.length === 0 || !username) throw new Error("Could not get result");
        postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData);
    } catch (error) {
        console.log(error);
    }
}; 







