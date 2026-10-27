import React from 'react';
import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (input.trim() === '') return;

    const newTask = {
      id: crypto.randomUUID(),
      title: input.trim(),
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInput('');
  };

  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div>
        <h1> Task Tracker </h1>

        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Nhập nhiệm vụ"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="submit">Thêm</button>
        </form>

        <h2>Danh sách nhiệm vụ</h2>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTask(task.id)}
                />

                <span
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? 'gray' : 'black',
                  }}
                >
                  {task.title}
                </span>
              </label>

              <button type="button" onClick={() => handleDeleteTask(task.id)}>
                Xóa
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
