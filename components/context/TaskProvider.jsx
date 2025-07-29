import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    setTasks((oldState) => [
      ...oldState,
      { description, id: oldState.length + 1, completed: false },
    ]);
  };

  const toggleTaskCompleted = (id) => {
    setTasks((oldState) =>
      oldState.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((oldState) => oldState.filter((t) => t.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTaskCompleted, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
