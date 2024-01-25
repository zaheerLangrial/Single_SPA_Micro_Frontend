import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {listenEvent } from '@mc/utils'

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    // window.addEventListener
    listenEvent('@mc/react-route/todo/add-task' , event => {
      setTasks(oldTasks => [...oldTasks , event.detail] )
    })
  },[])
  return (
    <div>
      <h1>@mc/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.describe}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
