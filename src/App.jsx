import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './route_pages/Dashboard'
import Assignments from './route_pages/Assignments'
import CreateAssignment from './route_pages/CreateAssignment'

export default function App() {
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
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/create" element={<CreateAssignment />} />
      </Routes>
    </div>
  )
}
