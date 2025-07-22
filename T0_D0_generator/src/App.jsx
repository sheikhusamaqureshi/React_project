import { useState } from 'react';
import Input from './assets/components/Input';
import Board from './assets/components/Board';

function App() {
  const [taskList, setTaskList] = useState([]); // ✅ VERY IMPORTANT

  return (
    <div className="container py-4">
      <div className="d-flex flex-column align-items-center justify-content-center py-4 gap-3">
        <h1 className="display-5 fw-bold mb-3">To-do-board</h1>
        <Input taskList={taskList} setTaskList={setTaskList} /> {/* ✅ */}
      </div>
      <div className="row g-4 justify-content-center">
        {taskList.map((task, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <Board
              index={index}
              task={task}
              setTaskList={setTaskList}
              taskList={taskList}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
