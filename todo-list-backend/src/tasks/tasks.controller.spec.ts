import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task } from '../task.model';

describe('TasksController', () => {
    let tasksController: TasksController;
    let tasksService: TasksService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TasksController],
            providers: [TasksService],
        }).compile();

        tasksController = module.get<TasksController>(TasksController);
        tasksService = module.get<TasksService>(TasksService);
    });

    it('should be defined', () => {
        expect(tasksController).toBeDefined();
    });

    describe('getAllTasks', () => {
        it('should return an array of tasks', () => {
            const result: Task[] = [
                { id: '1', content: 'Test task 1', done: false },
                { id: '2', content: 'Test task 2', done: true }
            ];
            jest.spyOn(tasksService, 'getAllTasks').mockImplementation(() => result);

            expect(tasksController.getAllTasks()).toBe(result);
        });

        it('should handle an empty array', () => {
            const result: Task[] = [];
            jest.spyOn(tasksService, 'getAllTasks').mockImplementation(() => result);

            expect(tasksController.getAllTasks()).toEqual([]);
        });
    });

    describe('addTask', () => {
        it('should successfully add a task', () => {
            const task: Task = { id: '1', content: 'Test task', done: false };
            jest.spyOn(tasksService, 'addTask').mockImplementation(() => task);

            expect(tasksController.addTask('Test task')).toBe(task);
        });
    });

    describe('deleteTask', () => {
        it('should call service to delete a task', () => {
            const spy = jest.spyOn(tasksService, 'deleteTask').mockImplementation(() => null);
            tasksController.deleteTask('1');
            expect(spy).toHaveBeenCalledWith('1');
        });
    });

    describe('updateTask', () => {
        it('should call service to update a task', () => {
            const spy = jest.spyOn(tasksService, 'updateTask').mockImplementation(() => null);
            tasksController.updateTask('1');
            expect(spy).toHaveBeenCalledWith('1');
        });
    });
});

