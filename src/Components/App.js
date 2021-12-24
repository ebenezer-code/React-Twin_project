//parent component
import React,{useState, useEffect} from "react"
import Form from "./Form"
import Header from "./Header";
import TodoList from "./TodoList"
import data from "./data"
//<Birthdays /> <Example/>

const App = () => {
    const getLocalStorage = () => {
        let todo = localStorage.getItem("todos");
        if (todo) {
            return JSON.parse(localStorage.getItem("todos"))
        }else {
            return []
        }
    }
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState(getLocalStorage());
    const [checkState, setCheckState] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
     
    useEffect (() => {
        filteredTodosHandler();
        saveToLocalStorage();
     },[todos, checkState])
     
    //save to localStorage
    const saveToLocalStorage = () =>{
        if(localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]))
        } else {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }    
    const filteredTodosHandler = () => {
       switch (checkState) {
           case "completed":
               setFilteredTodos(todos.filter(todo => todo.completed === true));
               break;
            case "uncompleted": 
            setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
           default:
               setFilteredTodos(todos);
               break;
       }
    }
    return (
        <div>
            <Header />
            <Form inputText = {inputText} setInputText = {setInputText} todos = {todos} setTodos = {setTodos}  setCheckState = {setCheckState}/>
            <TodoList todos = {todos} setTodos = {setTodos} filteredTodos = {filteredTodos}/>
            <Birthdays className = "birthdays" />
        </div>
    )
}
const Birthdays = () => {
    const [people, setPeople] = useState(data);

    const reset = () => {
        setPeople(data)
    }
    return <main className= "main"> 
        <List person = {people} setPeople = {setPeople}/>
          <button onClick = {() => setPeople([])} className = "clear">Clear All</button>
          <button onClick = {() => reset()} className = "clear">Back</button>
         
          
    </main>
}
const List = ({person, setPeople}) => {
    const removeBirthday = (id) => {
        const newPerson = person.filter(person => person.id !== id);
        setPeople(newPerson);
    }
    return <>
        <h2 className = "person-h2">{person.length} birthdays next-month</h2>
        {person.map(person => {
            const {id,name,age,image} = person
            return (
              <div key = {id} className= "person-div">
                 <img src = {image} className = "b-img"/>
                 <h2>{name}</h2>
                 <p style = {{position: "absolute", marginTop: "70px", fontFamily: "monospace", fontSize: "1rem"}}>{age}</p>
                <button onClick = {() => removeBirthday(id)} style = {{marginLeft: "auto"}}>Remove</button>
            </div>)
        })}
        
     </>
}

export default App