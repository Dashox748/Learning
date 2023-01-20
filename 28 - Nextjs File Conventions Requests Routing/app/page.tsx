import { Suspense } from "react";
import TodoList from "@/app/todos/TodoList";
export default function Home() {
  return (
    <main>
      <Suspense fallback={<p>loading</p>}>
        {/*  @ts-ignore    */}
        <TodoList />
      </Suspense>
    </main>
  );
}
