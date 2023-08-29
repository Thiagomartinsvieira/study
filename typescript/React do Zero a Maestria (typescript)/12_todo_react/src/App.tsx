import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

// css
import styles from './App.module.css';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// interfaces
import { ITask } from './interfaces/Task';
import Modal from './components/Modal';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      }),
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal');
    if (display) {
      modal!.classList.remove('hide');
    } else {
      modal!.classList.add('hide');
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficult: number) => {
    const updatedTask: ITask = { id, title, difficult };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);

    hideOrShowModal(false);
  };

  return (
    <div>
      <Modal
        children={
          <TaskForm
            btnText="Editar tarefa"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdadate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>what will you do?</h2>
          <TaskForm
            btnText="Create task"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Your tasks:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
