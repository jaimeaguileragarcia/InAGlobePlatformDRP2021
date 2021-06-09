import { Link } from "react-router-dom"

const PersonalToDo = ({ todos, title }) => {

    const handleRemove = e => {
        console.log("This task is completed and hence needs to be removed from both the database and the user's dashboard")
        // e.preventDefault()
        // fetch("/todos/" + id, {method: 'DELETE'})
        //     .then(()=> {history.push('/');})
    };

    return (
        <div className="todo-list">
            <h2>{title}</h2>
            {todos.map((todo) => (
                <div className="todo-preview" key={todo.id}>
                    <h2>{todo.todo_desc}</h2>
                    <h3><strong>Priority level:</strong> {todo.priority}</h3>
                    <h3><strong>To be done by:</strong> {todo.due_date}</h3>
                    <button onClick={handleRemove}>Completed</button>
                </div>
            ))}
            {/* <div className="add-todo-button"> */}
                <Link className="add-todo-label" to={`/add-todo`}>
                    Add a personal task
                </Link>
            {/* </div> */}
        </div>
    );

}

export default PersonalToDo;