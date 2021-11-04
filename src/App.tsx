import * as React from 'react'
import { render } from 'react-dom'
//components
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
//interface
import { TodoInterface } from './interface'
import './style.css';

const App: React.FC = () => {
  const[todos, setTodos] = React.useState<TodoInterface[]>([])
  //create new item
  function handleTodoCreate(todo: TodoInterface){
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.push(todo)
    setTodos(newTodosState)
  }

  //update item
  function handleTodoUpdate (event: React.ChangeEvent<HTMLInputElement>, id:string){
    const newTodosState: TodoInterface[] = [...todos]

    newTodosState.find((todo:TodoInterface) => todo.id === id)!.name = event.target.value

    setTodos(newTodosState)
  }

  //remove item
  function handleTodoRemove(id: string){
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
    setTodos (newTodosState)
  }

  //check item completed
  function handleTodoComplete(id:string){
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo:TodoInterface) => todo.id === id) !.isCompleted
    setTodos(newTodosState)
    }

    return(
      <div className="App">
        <React.Fragment>
          <h2>Todo App</h2>
          <ToDoForm todos={todos} handleTodoCreate={handleTodoCreate}/>
          
          <ToDoList todos={todos} handleTodoUpdate={handleTodoUpdate} handleTodoRemove={handleTodoRemove} handleTodoComplete={handleTodoComplete}/>
        </React.Fragment>
      </div>
    )
}

export default App;