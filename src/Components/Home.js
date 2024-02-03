import React, { useEffect } from 'react'
import { useState } from 'react';
import Task from './Task';



const Home = () => {
    const initialArray = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
    const [title , setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [tasks,settasks] = useState(initialArray);

    const submitHandler = (e)=>{
        e.preventDefault();
        settasks([...tasks,{title,description}]);
    }

    const deleteTask = (index)=>{
        const filterArr = tasks.filter((val,i)=>{
            return i!== index;
        });
        settasks(filterArr)
    }

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
    
    },[tasks])

  return (
    <div className='home'>
        <h1>Daily Goals</h1>
        <form onSubmit={submitHandler}>
        <input type="text" placeholder='Title' className='task'  value={title}  onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder='Description' className='description'  value={description} onChange={(e)=> setDescription(e.target.value)}/>
        <button type='submit' className='add'>Add </button>
        </form>

        {tasks.map((task,index) => {
            return <Task key={index} title={task.title} description={task.description} deleteTask={deleteTask} index={index}/>
        })}
    </div>
  )
}

export default Home