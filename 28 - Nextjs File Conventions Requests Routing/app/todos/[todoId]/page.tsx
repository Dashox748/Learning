import {Todos} from "@/typings";

type pageProps ={
    params:{
        todoId:string
    }
}

async function fetchTodoById(id:string){
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const todo:Todos = await res.json()
    return todo
}
async function Page({params: {todoId}}:pageProps) {
    const todo = await fetchTodoById(todoId)
    return (
        <div>
            <h1>{todo?.title}</h1>
            <h2>Completed: {todo.completed?"Yes":"No"}</h2>
        </div>
    );
}

export default Page;
