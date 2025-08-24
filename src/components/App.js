import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //put tasks in state
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  //remove tasks
  function handleDeleteTask(taskText){
    setTasks(tasks.filter(task => task.text !== taskText))

  }
  
  function handleCategorySelect(category){
    setSelectedCategory(category)
  }
  //filter based on selected category
  const displayedTasks = selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory)



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}
      selectedCategory={selectedCategory}
      onCategorySelect={handleCategorySelect}
      
      />
      <NewTaskForm categories = {CATEGORIES}
      onTaskFormSubmit = {newTask => setTasks([...tasks, newTask])} />
      <TaskList tasks={displayedTasks} onDeleteTask={handleDeleteTask}/>
      
    </div>
  );
}

export default App;
