import React from 'react';

interface TaskProps {
    content: string;
    done: boolean;
    toggleDone: () => void;
    deleteTask: () => void;
}

const Task: React.FC<TaskProps> = ({ content, done, toggleDone, deleteTask }) => {
    return (
        <div style={{ textDecoration: done ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={done} onChange={toggleDone} />
            {content}
            <button onClick={deleteTask}>Delete</button>
        </div>
    );
};

export default Task;
