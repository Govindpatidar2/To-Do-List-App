import React, { useState } from 'react'
import './App.css'
import TodoInput from './component/TodoInput.js';
import TodoList from './component/TodoList.js'
const App = () => {
  const [listTodo,setListTodo]=useState([]);
  
  let addList=(inputText)=>{
    if(inputText!==""){

      setListTodo([...listTodo,inputText])
      console.log("Value is added");
    }
    else{
      alert("You have not entered anything, please enter something to add")
    }
  }
  const deleteListItem=(key)=>{
    let isconfirm = window.confirm("Are you sure you want to delete this task?");
    if(isconfirm){
      let newListTodo=[...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
    }
    else{
      console.log("delete task cancelled")
    }
  }
  return (
   <>
   <div className="main-box">
    <div className='center-box'>
      <h1 className='main'>TODO-LIST APP</h1>
      <TodoInput addList={addList}/>
      <hr />
      {listTodo.map((listItem,i)=>{
        return(
          <TodoList key={i} item={listItem} deleteListItem={deleteListItem}/>
        )
      })}      
    </div>
   </div>
   </>
  )
}

export default App
