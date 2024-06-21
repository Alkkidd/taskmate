import React, { useEffect, useState } from 'react';

export default function AddTask({ taskList, setTaskList, task, setTask }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(task.name || '');
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    if (task.id) {
      const updatedTaskList = taskList.map((todo) => 
        todo.id === task.id ? { ...todo, name: inputValue, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : todo
      );
      setTaskList(updatedTaskList);
      setTask({});
    } else {
      const newTask = {
        id: date.getTime(),
        name: inputValue,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      };
      setTaskList([...taskList, newTask]);
    }
    setInputValue('');
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={inputValue}
          onChange={handleChange}
          autoComplete="off"
          placeholder="Add task"
          maxLength="25"
        />
        <button type="submit">{task.id ? 'Update' : 'Add'}</button>
      </form>
    </section>
  );
}
