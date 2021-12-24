import React from "react";


const Todo = ({value, todos, id, completed, setTodos}) => {
    const deleteItem = () => {
       setTodos(todos.filter(item => item.id !== id ))
    ;
    }
    const completeBtn = () => { 
       setTodos(todos.map(el => {
           if(el.id === id){
               return {...el, completed: !el.completed}
           }
           return el;
       }))
    }
    return (
        <div className="todo">
            <li className = {`todo-item ${completed ? "completed": ""}`}>
                {value}
            </li>
            <button className = "complete-btn" onClick = {() => completeBtn(id)}>
                <i className = "fas fa-check"></i>
            </button>
            <button className = "trash-btn" onClick = {() => deleteItem(id)}>
                <i className = "fas fa-trash"></i>
            </button>
     </div>
    )
}


export default Todo