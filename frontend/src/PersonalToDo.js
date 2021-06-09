import { Link } from 'react-router-dom'

const PersonalToDo = ({ todos, title }) => {

    return (
        <div className="todo-list">
            <h2>{title}</h2>
            {todos.map((todo) => (
                <div className="todo-preview" key={todo.id}>
                    <h2>{todo.todo_desc}</h2>
                    <h3>Priority level: {todo.priority}</h3>
                </div>
            ))}
        </div>
    );

}

export default ProjectList;