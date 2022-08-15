import TodoForm from "./TodoForm";
import { FaBeer } from "react-icons/fa";
import '../App.css'
import { useState } from "react";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = todo => {


      const newTodos =[...todos,todo]

      setTodos(newTodos)
  };

  const remove = id =>{
        const removedArr = [...todos].filter(todo=>todo.id!==id);

        setTodos(removedArr)

  }
  return (
    <div className="border">
      <h1>What's the Plan for Today?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo  todos={todos} remove={remove}/>
        {FaBeer}
    </div>
  );
}

export default TodoList;
