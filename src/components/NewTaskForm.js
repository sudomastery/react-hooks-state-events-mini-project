import React from "react";
import { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText] = useState("")
  const [category, setCategory] = useState(categories.find(x => x !== "All"))

  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit({text, category})
    //reset the form
    setText("")
    setCategory(categories.find(x => x !== "All"))
  }

  return (
    <form className="new-task-form" onSubmit = {handleSubmit}>
      <label>
        Details
        <input type="text" name="text"
        value={text} 
        onChange={e => setText(e.target.value)}
        />      </label>
      <label>
        Category
        <select name="category"
        value={category}
        onChange={e => setCategory(e.target.value)}
        
        >
        
          {/* render <option> elements for each category here */}
          {categories.filter(x => x !== "All").map(x => (
            <option key={x} value={x}>{x}</option>
          ))}



        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
