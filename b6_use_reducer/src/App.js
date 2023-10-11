import { useState,useReducer,useRef } from 'react'

// useReducer : sd giống useState 
// . Init state
// . Actions: 
// . Reducer:
// . Dispatch

//Init state
const initState = {
  job:"",
  jobs:[]
}

// Actions
const SET_JOB ="set_job"
const ADD_JOB = "add_job"
const DELETE_JOB="delete_job"

const setJob = payload => {
  return {
    type :SET_JOB,
    payload
  }
}
const addJob= payload => {
  return {
    type: ADD_JOB,
    payload
  }
}
const deleteJob = payload => {
  return {
    type : DELETE_JOB,
    payload
  }
}

// Reducer
const reduce = (state,action)=>{
  console.log("action",action)
  console.log("Prev state",state)
  let newState;
  switch(action.type){
    case SET_JOB:
      newState ={
         ...state,
         job:action.payload
      }
    break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs:[...state.jobs,action.payload] 
      }
      break ;
    case DELETE_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload,1)
      newState = {
        ...state,
        jobs:newJobs
      }
      break;  
    default:
      throw new Error("invalid action")
  }
  console.log("new state",newState)
 return newState
}
// dispath

function App() {
  //const [count, setCount] = useState(0)
 const [count,dispatch] = useReducer(reduce,initState)
 const{job,jobs} = count
 const inputRef = useRef()

 const handleSubmit = ()=>{
  dispatch(addJob(job))
  dispatch(setJob(''))
  inputRef.current.focus()
 }

  return (
    <div style={{ padding: '4px' }}>
      <input 
      ref={inputRef}
      type='text' placeholder='Enter todo'
        value={job}
        onChange={e=>{
          dispatch(setJob(e.target.value))
        }
          
        }
      />
      <button onClick={handleSubmit}
      >Add</button>
      <ul>
       {jobs.map((job,index)=>(
        <li key={index}>
          {job}
          <span onClick={()=>{dispatch(deleteJob(index))}}>&times;</span>
          </li>
       ))}
      </ul>
    </div> 
  );
}

export default App;
