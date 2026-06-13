import { Link, Route, Routes } from 'react-router-dom'
import {useState} from 'react'
import Dashboard from './route_pages/Dashboard'
import Assignments from './route_pages/Assignments'
import CreateAssignment from './route_pages/CreateAssignment'

  const assignmentKey = 'Tasks'

export default function App() {



  let [assignments, setAssignments] = useState(() => {
    let rawData = localStorage.getItem(assignmentKey)
    if (!rawData) {
      return []
    }
    return JSON.parse(rawData)
  })

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

  return (
    <div>
      <h1>Assignment Tracker</h1>

      <nav style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <Link to="/">Dashboard</Link>
        <Link to="/assignments">Assignments</Link>
        <Link to="/create">Create Assignment</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/assignments" element={<Assignments assignments={assignments} toggleCompleted={toggleCompleted} deleteAssignment={deleteAssignment}/>} />
        <Route path="/create" element={<CreateAssignment assignments={assignments} setAssignments={setAssignments}/>} />
      </Routes>
    </div>
  )
}
