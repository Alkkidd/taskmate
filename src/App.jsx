import { useState } from 'react';
import Header from './components/Header.jsx';
import AddTask from './components/AddTask.jsx'; 
import ShowTask from './components/ShowTask.jsx'; 
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]); 
  const [task, setTask] = useState({});

  return (
    <div className="App">
      <Header />
      <AddTask 
        taskList={taskList} 
        setTaskList={setTaskList}  
        task={task} 
        setTask={setTask} 
      />
      <ShowTask 
        taskList={taskList} 
        setTaskList={setTaskList} 
        task={task} 
        setTask={setTask} 
      />
    </div>
  );
}

export default App;
