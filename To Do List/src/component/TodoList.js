import React from 'react'

const TodoList = (props) => {
  return (
    <>
    <li className="items">
        {props.item}
        <span className="icons">
            <i className='fa-solid fa-trash-can icon-delete' onClick={e=>{
                props.deleteListItem(props.index)
            }}></i>
        </span>
    </li>
    </>
  )
}
export default TodoList;