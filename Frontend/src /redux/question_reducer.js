/** to initialize store */

import { createSlice } from "@reduxjs/toolkit"

/** specify createSlice function to reducer */

export const questionReducer= createSlice({
    name: 'questions',
    initialState: {
        queue: [],
        answers: [],
        trace: 0
    },
   /** specify and dispatch. We can change value of the store using action. */
    reducers: {
        startExamAction: (state, action) => {
            let {question, answers}= action.payload
            return {
                ...state,
                queue: question,
                answers: answers
            }
        },
        /** update trace value by + one to move to next question */
        moveNextAction : (state) => {
            return {
                ...state,
                trace: state.trace + 1
            }
        },
         /** update trace value by - 1 to move to next question */
        movePrevAction : (state)=> {
            return {
                ...state,
                trace: state.trace -1
            }
        }
    }

})

export const {startExamAction, moveNextAction, movePrevAction} = questionReducer.actions;
export default questionReducer.reducer;