import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
    let tasksService: TasksService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TasksService],
        }).compile();

        tasksService = module.get<TasksService>(TasksService);
    });

    it('should be defined', () => {
        expect(tasksService).toBeDefined();
    });

    describe('getAllTasks', () => {
        it('should return an empty array if no tasks are added', () => {
            expect(tasksService.getAllTasks()).toEqual([]);
        });

        it('should return all tasks', () => {
            const task = tasksService.addTask('Test task');
            expect(tasksService.getAllTasks()).toEqual([task]);
        });
    });

    describe('addTask', () => {
        it('should add a task and return it', () => {
            const task = tasksService.addTask('Test task');
            expect(task.content).toEqual('Test task');
            expect(task.done).toBeFalsy();
        });
    });

    describe('deleteTask', () => {
        it('should delete a task by id', () => {
            const task = tasksService.addTask('Test task');
            tasksService.deleteTask(task.id);
            expect(tasksService.getAllTasks()).toEqual([]);
        });
    });

    describe('updateTask', () => {
        it('should update the done status of a task by id', () => {
            const task = tasksService.addTask('Test task');
            tasksService.updateTask(task.id);
            const updatedTask = tasksService.getAllTasks()[0];
            expect(updatedTask.done).toBe(true);
        });
    });
});
