import { getAllTodos } from "../../api.ts";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);

  return (
    <main className="w-2/3 mx-auto">
      <div className="text-center underline text-2xl bg-cyan-300 py-6 bold">
        <h1 >TO DO LIST</h1>
      </div>

      <div className="my-10">
        <AddTask/>
      </div>
        <TodoList tasks={tasks}/>

    </main>
  )
}
