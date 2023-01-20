import classes from "./page.module.css";
import { Todos } from "@/typings";
import Link from "next/link";

async function fetchTodos() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos: Todos[] = await res.json();
  return todos;
}

async function Todos() {
  const todos = await fetchTodos();
  return (
    <div className={classes.todos_list}>
      {todos?.map((item: Todos) => {
        return (
          <div key={item.title}>
            <Link
              href={`/todos/${item.id}`}
              className={classes.todo}
              prefetch={false}
            >
              Todo: {item.id}.
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
