import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Task from './Task';

describe('<Task />', () => {
    it('renders correctly', () => {
        const { getByText } = render(
            <Task content="Test task" done={false} toggleDone={() => {}} deleteTask={() => {}} />
        );

        expect(getByText('Test task')).toBeInTheDocument();
    });

    it('calls toggleDone on checkbox click', () => {
        const toggleDone = jest.fn();
        const { getByRole } = render(
            <Task content="Test task" done={false} toggleDone={toggleDone} deleteTask={() => {}} />
        );

        fireEvent.click(getByRole('checkbox'));
        expect(toggleDone).toHaveBeenCalledTimes(1);
    });

    it('calls deleteTask on delete button click', () => {
        const deleteTask = jest.fn();
        const { getByText } = render(
            <Task content="Test task" done={false} toggleDone={() => {}} deleteTask={deleteTask} />
        );

        fireEvent.click(getByText('Delete'));
        expect(deleteTask).toHaveBeenCalledTimes(1);
    });
});