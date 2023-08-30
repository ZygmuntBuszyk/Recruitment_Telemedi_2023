import { Injectable } from '@nestjs/common';
import { Task } from '../task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    addTask(content: string): Task {
        const newTask: Task = {
            id: `${Date.now()}`,
            content,
            done: false,
        };
        this.tasks.push(newTask);
        return newTask;
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTask(id: string): void {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.done = !task.done;
        }
    }
}
