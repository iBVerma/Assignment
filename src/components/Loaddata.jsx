import React, { useState, useEffect } from 'react';
import '../style/Loaddata.css'; 
import deleteicon from "../assets/delete.svg"

const TaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [draggingIndex, setDraggingIndex] = useState(null);

  const [newTask, setNewTask] = useState({ name: '', date: '', status: 'Not Completed' });
  const [filterStatus, setFilterStatus] = useState('All'); 

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.name.trim() !== '' && newTask.date.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask({ name: '', date: '', status: 'Not Completed' });
    } else {
      alert("Please check the form data again!");
    }
  };
  

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
  };

  const onDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index.toString());
    setDraggingIndex(index);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, targetIndex) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    setDraggingIndex(null);
    
    if (draggedIndex !== targetIndex) {
      const updatedTasks = [...tasks];
      const [draggedTask] = updatedTasks.splice(draggedIndex, 1);
      updatedTasks.splice(targetIndex, 0, draggedTask);
      setTasks(updatedTasks);
    }
  };
  console.log(tasks);
  

  const filteredTasks = tasks.filter(task => filterStatus === 'All' || task.status === filterStatus);

  return (
    <div>
      <div className='nav1'>
        <div className="task-inputs">
          <input
            type="text"
            placeholder="Task name"
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          />
          <input
            type="date"
            value={newTask.date}
            onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
          />
          <select
            value={newTask.status}
            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
          >
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={addTask}>Add Task</button>
        </div>

        <div className='Filter'>
          <label>Filter </label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      <table className="task-table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {filteredTasks.map((task, index) => (
              <tr
                key={index}
                className={`draggable-row ${draggingIndex === index ? 'dragging' : ''} ${task.status === 'Completed' ? 'completed' : ''}`}
                draggable
                onDragStart={(e) => onDragStart(e, index)}
                onDragOver={onDragOver}
                onDrop={(e) => onDrop(e, index)}
              >
                <td className='tabledata'>{task.name}</td>
                <td className='tabledata'>{task.date}</td>
                <td>
                  <select
                    value={task.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                  >
                    <option value="Not Completed">Not Completed</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => removeTask(index)} className='deletebt'><img src={deleteicon}/></button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h3>No of Tasks: {tasks.length}</h3>
    </div>
  );
};

export default TaskManager;
