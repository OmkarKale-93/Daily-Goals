import React from 'react'

const Task = ({title, description,deleteTask,index}) => {
  return (
    <>
    <div className='home'>
      <div className="task1">
        <div className='task2'>
            <b><p>{title}</p></b>
            <span>{description}</span>
        </div>
        <button onClick={()=>{deleteTask(index)}} className='minus'>-</button>
        </div>
    </div>
    </>
  )
}

export default Task
