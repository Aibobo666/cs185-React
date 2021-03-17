import { useState } from 'react'

const UpdateTask = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [day, setDay] = useState('')
  const [textInfor, setTextInfor] = useState('')
  const [important, setImportant] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (title.length > 30) {
      alert('Title cannot exceed 30 characters!')
      return
    }
    if (!title) {
      alert('Title cannot be empty!')
      return
    }
    if(!(textInfor.includes('zoom'))){
      alert('Zoom link is not valid')
      return
    }
    var today = new Date().getDate()
    var toMonth = new Date().getMonth()
    var input_day = Number(day.substring(8,10))
    var input_month = Number(day.substring(5,7))
    if((input_day <= today) || (input_month < toMonth)){
      alert(' Meeting date must be after current date')
      return
    }
    onAdd({title, day, textInfor, important})

    setTitle('')
    setDay('')
    setTextInfor('')
    setImportant(false)
  }

  return (
    <form className='add_Task' onSubmit={onSubmit}>
      <div className='add_Task_element'>
        <label>Title: </label>
        <input type='text' placeholder='Add a title'
        value={title} onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='add_Task_element'>
        <label>Date: </label>
        <input type='datetime-local'
        value={day} onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='add_Task_element'>
        <label>Zoom Link: </label>
        <input type="url" placeholder='Add a zoom link'
        value={textInfor} onChange={(e) => setTextInfor(e.target.value)}
        />
      </div>
      <div className='add_Task_element'>
        <label>Important: </label>
        <input type='checkbox' checked={important}
        value={important} onChange={(e) => setImportant(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Update Information' className='btn'/>
    </form>
  )
}

export default UpdateTask
