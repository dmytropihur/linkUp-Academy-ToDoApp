import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Input: React.FC = () => {
  type Task = {
    id: string;
    createdAt: string;
    task: string;
  };

  const [task, setTask] = useState<Task>({
    id: '',
    createdAt: '',
    task: '',
  });

  const handleChange = (value: string) => {
    setTask({
      id: uuidv4(),
      createdAt: Date(),
      task: value,
    });
  };

  return (
    <TextField
      id="outlined-basic"
      label="Type your task"
      variant="outlined"
      value={task.task}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Input;
