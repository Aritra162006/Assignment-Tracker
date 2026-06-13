import { useState, useEffect } from 'react'
import DisplayCard from '../Components/displayCard'

const assignmentKey = 'Tasks'

export default function Assignments({ assignments, toggleCompleted, deleteAssignment }) {

    useEffect(() => {
    localStorage.setItem(assignmentKey, JSON.stringify(assignments))
  }, [assignments])

    return (
    <div>
      <h1>Assignments</h1>
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
