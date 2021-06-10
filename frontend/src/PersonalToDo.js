import useFetch from './useFetch'
import { useState } from "react";
import { useHistory } from "react-router-dom"

const PersonalToDo = ({ todos, title }) => {

    const openTaskForm = () => {
        document.getElementsByClassName("add-todo-form")[0].style.display = "block";
    }

    const { data: users, error } = useFetch("/users")

    const [todo_desc, setTodoDesc] = useState("");
    const [priority, setPriority] = useState(1);
    const [username, setUsername] = useState("none");

    const history = useHistory();

    const handleSubmit = e => {
        document.getElementsByClassName("add-todo-form")[0].style.display = "none";

        e.preventDefault();
        const newTodo = { todo_desc, priority, username };

        fetch("/todos", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTodo)
        }).then(() => {
            window.location.reload();
        })
    }

    const handleRemove = id => e => {
        e.preventDefault();
        fetch("/todos/" + id, { method: 'DELETE' })
            .then(() => {
                window.location.reload();
            })
    };

    return (
        <div className="todo-list">
            <h2>{title}</h2>

            {todos.map((todo) => (
                <div className="todo-preview" key={todo.id}>
                    <h2>{todo.todo_desc}</h2>
                    <h3><strong>Priority level:</strong> {todo.priority}</h3>
                    <h3><strong>To be done by:</strong> {todo.due_date}</h3>
                    <button onClick={handleRemove(todo.id)}>Complete</button>
                </div>
            ))}


            <div className="add-todo-form">
                <form onSubmit={handleSubmit}>
                    <label>Task description</label>
                    <textarea value={todo_desc} onChange={(e) => setTodoDesc(e.target.value)} required placeholder="Add some awesome description!" ></textarea>
                    <label>Priority level</label>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)} >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <label>When should this task be done by?</label>
                    <input
                        type="date"
                    />
                    <label>Assigned user</label>
                    <select value={username} onChange={(e) => setUsername(e.target.value)} >
                        <option value="none">None</option>
                        {users.map(user => <option value={user.username}>{user.username}</option>)}
                    </select>
                    <button>Save task</button>
                </form>
            </div>

            <div className="add-todo-button">
                <button onClick={openTaskForm}>Add a personal task</button>
            </div>

        </div>
    );

}

export default PersonalToDo;