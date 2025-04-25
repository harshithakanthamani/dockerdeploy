import React, { useState } from 'react';
const ToDoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };
  const toggleComplete = (id) => {
    setTasks(tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>To-Do Planner</h1>
        <div style={styles.inputRow}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
            style={styles.input}
          />
          <button onClick={addTask} style={styles.addButton}>Add Task</button>
        </div>
        <ul style={styles.taskList}>
          {tasks.map((t) => (
            <li key={t.id} style={styles.taskItem}>
              <div
                style={{
                  ...styles.taskText,
                  textDecoration: t.completed ? 'line-through' : 'none',
                  color: t.completed ? '#8e8e8e' : '#333',
                  opacity: t.completed ? 0.7 : 1,
                }}
              >
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleComplete(t.id)}
                  style={{ marginRight: '12px' }}
                />
                {t.text}
              </div>
              <button onClick={() => deleteTask(t.id)} style={styles.deleteButton}>🗑️</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Poppins', sans-serif",
    padding: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.07)',
    width: '100%',
    maxWidth: '520px',
  },
  heading: {
    textAlign: 'center',
    color: '#4b3f72',
    fontSize: '24px',
    marginBottom: '24px',
  },
  inputRow: {
    display: 'flex',
    gap: '12px',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '12px 14px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '15px',
    backgroundColor: '#fdfdfd',
  },
  addButton: {
    padding: '12px 20px',
    backgroundColor: '#6a5acd',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  taskList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    marginBottom: '12px',
    backgroundColor: '#fafafa',
    borderRadius: '10px',
    border: '1px solid #e2e2e2',
  },
  taskText: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '15px',
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    color: '#cc4444',
  },
};

export default ToDoApp;
