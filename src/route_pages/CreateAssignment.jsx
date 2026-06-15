import { useState, useEffect } from 'react';
import DisplayCard from '../Components/displayCard';

const assignmentKey = 'Tasks';

export default function CreateAssignment({ assignments, setAssignments }) {


    let [input, setInput] = useState('')
    let [due, setDue] = useState('')
    let [priority, setPriority] = useState('Select Priority')
    let [subject, setSubject] = useState('')

    function add() {
    return (
      setAssignments([
        ...assignments,
        {
          id: Date.now(),
          task: input,
          due: due,
          priority: priority,
          completed: false,
          subject: subject
        },
      ]),
      setInput(''),
      setDue(''),
      setPriority('Select Priority'),
      setSubject('')
    )}



  return (
    <div>
      <h1>Create Assignment</h1>

      <h3>Assignment:</h3>
      <input value={input} onChange={(e) => setInput(e.target.value)} />

      <br />

      <h3>Due Date:</h3>
      <input type="date" value={due} onChange={(e) => setDue(e.target.value)} />

      <br />

      <h3>Priority:</h3>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Select priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <h3>Subject:</h3>
      <input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)} />

      

      <br />
      <br />

      <button onClick={add}>Add</button>
      </div>
    )

}