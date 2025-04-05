import React, { useState } from 'react'

const TodoInput = (props) => {
    const [inputText,setInputText]=useState('');
  return (
    <>
    <div className="input">
        <input placeholder='Enter youe tasks here' value={inputText} type="text" className='input-box-todo'  onChange={e=>{setInputText(e.target.value)}} />
        <button className='btn' onClick={()=>{
            props.addList(inputText)
            setInputText("")
        }}>+</button>
       
    </div>
    </>
  )
}

export default TodoInput
