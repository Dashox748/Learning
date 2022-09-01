import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTodo = {
        id: Date.now(),
        taskName: action.payload.taskName,
        completed: false,
      };
      state.push(newTodo);
    },
    editTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = action.payload.taskComplete;
    },
    removeTask:(state,action) =>{
      return state.filter(task=>task.id!==action.payload.id)
    }
  },
});

export const { addTask, editTask,removeTask } = todoListSlice.actions;

export default todoListSlice.reducer;
