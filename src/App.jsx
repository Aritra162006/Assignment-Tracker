import { useState } from 'react'
import DisplayCard from './Components/displayCard'

export default function App() {

  let [input, setInput] = useState('')
  let [due , setDue] = useState("")
  let [priority , setPriority] = useState("Select Priority")
  let [assignments, setAssignments] = useState([])

  function add() {
    return (
      setAssignments([...assignments, {id:Date.now(), task:input, due:due, priority:priority}]),
      setInput(""),
      setDue(""),
      setPriority("Select Priority"))

  }

  return (
    <div>
      <h1>Assignment Tracker</h1>

      <h3>Assignment:</h3>
      <input value={input} onChange={(e)=>setInput(e.target.value)}/>


      <br />

      <h3>Due Date:</h3>
      <input type="date" value={due} onChange={(e)=>setDue(e.target.value)}/>


      <br />

      <h3>Priority:</h3>
      <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
        <option>Select priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>




      <br />
      <br />

      <button onClick={add}>Add</button>


      {assignments.map((ele)=>{
        return <div key={ele.id}>
          <DisplayCard assignment={ele}/>
          </div>
      })}
        
      
    </div>
  )
}