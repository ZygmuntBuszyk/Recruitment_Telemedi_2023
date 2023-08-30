import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import App from './App';
import axios from 'axios';

jest.mock('axios');

describe('<App />', () => {
  it('fetches and displays tasks', async () => {
    axios.get.mockResolvedValue({ data: [{ id: 1, content: 'Test task', done: false }] });

    let container;
    await act(async () => {
      const result = render(<App />);
      container = result.container;
    });

    expect(container.textContent).toContain('Test task');
  });

  it('adds a new task', async () => {
    axios.post.mockResolvedValue({ data: { id: 2, content: 'New task', done: false } });

    const { getByText, getByLabelText } = render(<App />);

    const input = getByLabelText('task-input');

    fireEvent.change(input, { target: { value: 'New task' } });
    fireEvent.click(getByText('Add'));

    expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/tasks', { content: 'New task' });
  });
});
