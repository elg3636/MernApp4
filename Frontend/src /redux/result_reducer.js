/** to initialize store */

import { createSlice } from "@reduxjs/toolkit"
/** specify createSlice function to reducer, store user result in result variable */

export const resultReducer= createSlice({
    name: 'result',
    initialState: {
        userId: null,
        result: []
    },
    /** change value of the store using actions. */
    reducers: {
        /** set the user id */
        setUserId: (state, action) => {
            state.userId =action.payload
        },
        /** push function add new element to result array */
        pushResultAction : (state, action) => {
            state.result.push(action.payload)
        },
        /** update result array when answers changed and return modified value */
        updateResultAction : (state, action) => {
            const { trace, checked} = action.payload;
            state.result.fill(checked, trace, trace +1)
        }
    }
})

export const { setUserId, pushResultAction, updateResultAction} = resultReducer.actions;
export default resultReducer.reducer;