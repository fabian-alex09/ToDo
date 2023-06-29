import {ITask} from "@/types/tasks";
import {Task} from "./Task"

interface TodoListProps {
    tasks: ITask[]
}

const TodoList: React.FC<TodoListProps>=({tasks})=>{
    return (
        <div className="flex items-centeroverflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>Tasks</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {tasks.map((task)=> (
                    <tr key={task.id}>
                    <td>{task.text}</td>
                    <td>Blude</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default TodoList;