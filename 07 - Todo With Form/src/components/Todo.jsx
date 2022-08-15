import { TiDelete } from "react-icons/ti";
import '../App.css'
function Todo({ todos, remove }) {
  return todos.map((tasks, index) => (
    <div className="task" key={index}>
      <div key={tasks.id}>
          {tasks.text}
          <TiDelete className="icon" onClick={()=>{remove(tasks.id)}}/>
      </div>


    </div>
  ));
}

export default Todo;
