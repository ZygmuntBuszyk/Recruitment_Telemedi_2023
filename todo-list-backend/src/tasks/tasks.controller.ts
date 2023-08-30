import { Controller, Get, Post, Delete, Patch, Body, Param } from '@nestjs/common';
import { Task } from '../task.model';
import {TasksService} from "./tasks.service";

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post()
    addTask(@Body('content') content: string): Task {
        return this.tasksService.addTask(content);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string): void {
        this.tasksService.deleteTask(id);
    }

    @Patch(':id')
    updateTask(@Param('id') id: string): void {
        this.tasksService.updateTask(id);
    }
}