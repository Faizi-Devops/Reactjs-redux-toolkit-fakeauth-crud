import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [{
        Name: "Faizan Ali",
        Class: "Web and Mobile Application",
        Batch: "Batch 05",
        Year: "2019"
    }]
}

export const todoSlice = createSlice({
    name: 'todoing',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload)



        },
        deleteTodo: (state, action) => {
            state.value.splice(action.payload, 1);

        },
        updateTodo: (state, action) => {
            console.log(action.payload.updateindex, "hdsfsfasf");
            state.value.map((value, index) => {
                if (index === action.payload.updateindex) {
                    value.Name = action.payload.updatedvalue.Name;
                    value.Class = action.payload.updatedvalue.Class;
                    value.Batch = action.payload.updatedvalue.Batch;
                    value.Year = action.payload.updatedvalue.Year;

                }
                else{
                    return value;
                }

            })



        }


    },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer