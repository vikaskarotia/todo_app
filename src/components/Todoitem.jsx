import React from 'react'

const Todoitem = ({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,

}) => {
  return (
    <div className='todocontainer'>
        <div className='todo'>
        <h4>{title}</h4>
        <p>{description}</p>
       </div>
       <div className="todo1">
       <input onChange={()=>{updateHandler(id)}} type="checkbox"  checked={isCompleted}/>
       <button onClick={()=>{deleteHandler(id)}}>delete</button> 
       </div>
      
    </div>

  )
}

export default Todoitem