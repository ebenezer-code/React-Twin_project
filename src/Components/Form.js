import React from "react"

const Form = ({inputText, setInputText, todos, setTodos, setCheckState}) => {
    const handleChange = (e) => {
        setInputText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,{text: inputText, completed: false, id: Math.random() * 100}
        ])
        setInputText("")
    }

    const stateCheck = (e) => {
        setCheckState(e.target.value)
    }
    return (
        <form>
        <input onChange = {handleChange} value ={inputText} type="text" className="todo-input" />
       <button onClick = {handleSubmit} className="todo-btn" type="submit">
           <i className="fas fa-plus-square"></i>
       </button>
       <div className="select">
           <select name="todos" className="filter-todo" onChange = {stateCheck}>
               <option value="all">All</option>
               <option value="completed">Completed</option>
               <option value="uncompleted">Uncompleted</option>
           </select>
     </div>
   </form>
   )
}

export default Form