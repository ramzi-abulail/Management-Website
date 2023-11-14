import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"


const TaskSlice = createSlice({
  name: 'task',
  initialState:[],
  reducers: {
    addTask(state , action) {
      return action.payload
    },
    getTask(state , action) {
      state.value--
    },
  },
})

export const { addTask, getTask } = TaskSlice.actions
 
export const addNewTask =(taskData)=>async(dispatch)=>{

try{
    const responce =await axios.post(' http://localhost:3000/tasks' , taskData);
    const newTask = responce.data
    dispatch(addTask(newTask))
}
catch(error){
console.log(error);
}

}




export default TaskSlice.reducer