import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from "./task/Task";

interface TaskData {
    id: number;
    content: string;
    done: boolean;
}

const url = 'http://localhost:5000/tasks';

function App() {
    const [tasks, setTasks] = useState<TaskData[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(url);
                setTasks(response.data);
            } catch (error) {
                console.error("There was an error fetching the tasks:", error);
            }
        };
        fetchTasks();
    }, []);

    const addTask = async () => {
        if(!newTask) {
            return;
        }
        try {
            const response = await axios.post(url, { content: newTask });
            setTasks([...tasks, response.data]);
            setNewTask('');
        } catch (error) {
            console.error("There was an error adding the task:", error);
        }
    };

    const toggleDone = async (id: number) => {
        try {
            await axios.patch(`${url}/${id}`);
            setTasks(
                tasks.map((task) =>
                    task.id === id ? { ...task, done: !task.done } : task
                )
            );
        } catch (error) {
            console.error(`There was an error toggling the task with ID ${id}:`, error);
        }
    };

    const deleteTask = async (id: number) => {
        try {
            await axios.delete(`${url}/${id}`);
            setTasks(tasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error(`There was an error deleting the task with ID ${id}:`, error);
        }
    };

    return (
        <div className="App">
            <h1>Recruitment Task</h1>
            <h2>To-Do List</h2>
            <input
                type="text"
                aria-label="task-input"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
            <div>
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        content={task.content}
                        done={task.done}
                        toggleDone={() => toggleDone(task.id)}
                        deleteTask={() => deleteTask(task.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
