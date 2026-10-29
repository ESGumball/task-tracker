import React from "react";
import { useState } from "react";

type NhiemVu = {
  id: number;
  tieude: string;
  hoanthanh: boolean;
};

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<Nhiemvu[]>([]);

  const ThemTask = () => {
    if (!input.trim()) return;

    const NhiemVuMoi: NhiemVu = {
      id: Date.now(),
      tieude: input,
      hoanthanh: false,
    };

    setTasks((prev) => [...prev, NhiemVuMoi]);
    setInput("");
  };

  const handleChange = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, hoanthanh: !task.hoanthanh } : task,
      ),
    );
  };

  const Xoa = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={ThemTask}>Thêm</button>

      {tasks.map((task) => (
        <div>
          <label>
            <input
              type="checkbox"
              checked={task.hoanthanh}
              onChange={() => handleChange(task.id)}
            />
            <span
              style={{
                textDecoration: task.hoanthanh ? "line-through" : "none",
              }}
            >
              {task.tieude}
            </span>
            <button onClick={() => Xoa(task.id)}> Xóa </button>
          </label>
        </div>
      ))}
    </div>
  );
};

export default App;
