
export default function DisplayCard({assignment, toggle}) {

    return (
        <div>
            <h2>{assignment.task}</h2>
            <h3>{assignment.due}</h3>
            <h4>{assignment.priority}</h4>
            <input type="checkbox" checked={assignment.completed} onChange={()=>toggle(assignment.id)}/>
            <br />
        </div>
    )
}