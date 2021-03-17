import React from 'react'
import './Meeting.css'
import {useState, useEffect} from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'
import UpdateTask from './UpdateTask'

const Meeting = () =>{

    const [tasks, setTasks] = useState([])
    const [signal, setSignal] = useState(false)
    const [id, setID] = useState(-1)
    const [showAddTask, setShowAddTask] = useState(false)

    useEffect(() => {
        const getTasks = async () => {
          const tasksFromServer = await fetchTasks()
          setTasks(tasksFromServer)
        }
    
        getTasks()
      }, [])
    
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
    
        return data
      }
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
    
        return data
      }

    const deleteTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
          method: 'DELETE',
        })
    
        setTasks(tasks.filter((task) => task.id !== id))
    }
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(task),
        })
    
        const data = await res.json()
    
        setTasks([...tasks, data])
    }

    const updateSignal = (local_id) => {
        if (local_id == id) {
          setSignal(false)
          setID(-1)
          return 
        }
        setSignal(true)
        setID(local_id)
    }

    const updateTask = async ({title, day, textInfor, important}) => {
        const updTask = {id: id, important: important, title: title,
                        day: day, textInfor: textInfor}
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(updTask),
        })
    
        setTasks(tasks.map((task) => task.id === id ?
          {id: task.id, important: important, title: title,
          day: day, textInfor: textInfor}
         : task))
         setSignal(false)
         setID(-1)
    }
    

    return(
        <div className="container">
            <Header title='Zoom Meeting Manager' onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} updateSignal={updateSignal} onAddshow={showAddTask}/>
            : 'No available schedules at this momemnt'}
            {signal && !showAddTask && <UpdateTask onAdd={updateTask}/>}
        </div>
        
    )
}

export default Meeting


