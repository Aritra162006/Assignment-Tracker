import { useEffect, useState } from 'react'
import DisplayCard from '../Components/displayCard'

const assignmentKey = 'Tasks'

export default function Assignments() {
  let [input, setInput] = useState('')
  let [due, setDue] = useState('')
  let [priority, setPriority] = useState('Select Priority')

  let [assignments, setAssignments] = useState(() => {
    let rawData = localStorage.getItem(assignmentKey)
    if (!rawData) {
      return []
    }
    return JSON.parse(rawData)
  })

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
        },
      ]),
      setInput(''),
      setDue(''),
      setPriority('Select Priority')
    )
  }

  function toggleCompleted(idToChange) {
    let res = assignments.map((ele2) => {
      let ele3 = { ...ele2 }
      if (ele3.id == idToChange) {
        ele3.completed = !ele3.completed
      }

      return ele3
    })

    setAssignments(res)
  }

  function deleteAssignment(idToDelete) {
    let res = assignments.filter((ele) => {
      if (ele.id == idToDelete) {
        return false
      }
      return true
    })
    setAssignments(res)
  }

  useEffect(() => {
    localStorage.setItem(assignmentKey, JSON.stringify(assignments))
  }, [assignments])

  return (
    <div>
      <h1>Assignment Tracker</h1>

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
      <select></select>

      <br />
      <br />

      <button onClick={add}>Add</button>

      {assignments.map((ele) => {
        return (
          <div key={ele.id}>
            <DisplayCard
              assignment={ele}
              toggle={toggleCompleted}
              del={deleteAssignment}
            />
          </div>
        )
      })}
    </div>
  )
}
