import React from 'react'
import Parcel from 'single-spa-react/parcel'
import {v4 as uuid} from 'uuid'
import {emitEvent} from '@mc/utils'

function App({name}) {
  // const [task , setTask] = useState('')
  const handleForm = (e) => {
    e.preventDefault();
    // use Utils
    emitEvent('@mc/react-route/todo/add-task' , {
      id : uuid(),
      describe : e.target.task.value
    })
    // or
    // dispatchEvent( new CustomEvent (
    //   '@mc/react-route/todo/add-task',
    //   {
    //     detail : {
    //       id : uuid(),
    //       describe : e.target.task.value
    //     }
    //   }
    // ))
    e.target.task.value = ''
  }
  return (
    <div>
      <h1>{name}</h1>
      <form onSubmit={handleForm}>
        <input type="text" placeholder='Enter Task' name='task'/>
        <button type='submit'>Submit</button>
      </form>
      <Parcel config={() => System.import('@mc/react-parcel')} />
    </div>
  )
}

export default App