export default function DisplayCard({assignment, toggle, del}) {

    return (
        <div style={{ border: '2px solid black', width:'180px',height:'220px',padding:'12px', borderRadius:'8px' }}>
            <h2>{assignment.task}</h2>
            <h3>Due Date: {assignment.due}</h3>
            <h4>Priority: {assignment.priority}</h4>
            <h4>Subject: {assignment.subject}</h4>
            <>
                <label>Completed:</label>
                <input type="checkbox" checked={assignment.completed} onChange={()=>toggle(assignment.id)}/>
            </>
            <button onClick={()=>del(assignment.id)}>Delete</button>
            
            <br />
        </div>
    )
}