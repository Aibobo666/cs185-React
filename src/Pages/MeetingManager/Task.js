const Task = ({ task, onDelete, updateSignal, onAddshow}) => {
    return (
        !onAddshow && <div className={`task ${task.important ? 'important' : ''}`} onDoubleClick={() => updateSignal(task.id)}>
         <h3>{task.title}</h3>
          <p>
           {task.day}
         </p>
         <a href={task.textInfor}>
           {task.textInfor}
         </a>
         <div className='deleteBtn' style={{color: 'gray', cursor: 'pointer'}}
           onClick = {() => onDelete(task.id)}>
             Delete
          </div>
       </div>
    )
}

export default Task
