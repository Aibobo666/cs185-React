import Task from './Task'

const Tasks = ({tasks,onDelete,updateSignal, onAddshow}) => {
    return(
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} updateSignal={updateSignal} onAddshow={onAddshow}/>
            ))}
        </div>
    )
}

export default Tasks

