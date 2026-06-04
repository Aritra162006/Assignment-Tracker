export default function DisplayCard({assignment, toggle, del}) {

    return (
        <div style={{ border: '2px solid black', width:'160px',height:'180px',padding:'12px', borderRadius:'8px' }}>
            <h2>{assignment.task}</h2>
            <h3>{assignment.due}</h3>
            <h4>{assignment.priority}</h4>
            <>
                <label>Completed:</label>
                <input type="checkbox" checked={assignment.completed} onChange={()=>toggle(assignment.id)}/>
            </>
            <button onClick={()=>del(assignment.id)}>Delete</button>
            
            <br />
        </div>
    )
}