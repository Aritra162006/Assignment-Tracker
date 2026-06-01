export default function DisplayCard({assignment}) {
    return (
        <div>
            <h2>{assignment.task}</h2>
            <h3>{assignment.due}</h3>
            <h4>{assignment.priority}</h4>
            <br />
        </div>
    )
}