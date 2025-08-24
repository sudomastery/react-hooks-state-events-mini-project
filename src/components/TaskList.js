import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <Task
        //also passed index because it was complaning 
        key={index}
        text={task.text}
        category={task.category}
        //prop drilling children can communicate with parents
        onDelete= {() => onDeleteTask(task.text)}
        />
        
      ))}
 
    </div>
  );
}

export default TaskList;
