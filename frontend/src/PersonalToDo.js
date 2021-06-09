import { Link } from "react-router-dom"

const PersonalToDo = ({ todos, title }) => {

    const handleRemove = () => {
        console.log("This task is completed and hence needs to be removed from both the database and the user's dashboard")
        // e.preventDefault()
        // fetch("/todos/" + id, {method: 'DELETE'})
        //     .then(()=> {history.push('/');})
    };

    const openTaskForm = () => {
        document.getElementsByClassName("add-todo-form")[0].style.display = "inline";
    }

    const handleSubmit = () => {
        document.getElementsByClassName("add-todo-form")[0].style.display = "none";
        console.log("This task should now be added")
        // e.preventDefault()

        // const newToDo = {Fill in something here};

        // fetch("/todos", {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(newTodo)
        // }).then(() => {
        //     history.push('/');
        // })
    }

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

            <div className="add-todo-form">
                <form onSubmit={handleSubmit}>
                    <label>Task description</label>
                    <textarea required placeholder="Add some awesome description!" ></textarea>
                    <label>Priority level</label>
                    <select >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <label>When should this task be done by?</label>
                    <input
                        type="date"
                        
                    />
                    <button>Save task</button>
                </form>
            </div>

            <button onClick={openTaskForm}>Add a personal task</button>

        </div>
    );

}

export default PersonalToDo;