import { ITask } from '../interfaces/Task';
import styles from './TaskForm.module.css';
import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdadate?(id: number, title: string, difficult: number): void;
};

const TaskForm = ({
  btnText,
  taskList,
  task,
  setTaskList,
  handleUpdadate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficult, setDifficult] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficult(task.difficult);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdadate) {
      handleUpdadate(id, title, difficult);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, difficult };

      setTaskList!([...taskList, newTask]);

      setTitle('');
      setDifficult(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setDifficult(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          placeholder="task title"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficult">Difficult: </label>
        <input
          type="number"
          name="difficult"
          placeholder="task difficult"
          onChange={handleChange}
          value={difficult}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
