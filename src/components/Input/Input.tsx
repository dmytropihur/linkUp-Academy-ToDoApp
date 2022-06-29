import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch } from '../../store/store';
import { addTask } from '../../store/tasks/slice';
import SnackBar from '../SnackBar/SnackBar';

import styles from './Input.module.scss';

const Input: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmitTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      addTask({
        id: uuidv4(),
        createdAt: Date.now(),
        task,
        pinned: false,
        completed: false,
      }),
    );
    setTask('');
    setOpen(true);
  };

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTask(event.target.value);
  };

  return (
    <Box className={styles.box}>
      <TextField
        value={task}
        onChange={(e) => onChangeInput(e)}
        className={styles.input}
      />
      <Button type="button" onClick={onSubmitTask} variant="contained">
        Add
      </Button>
      <SnackBar open={open} setOpen={setOpen}>
        The new task is added
      </SnackBar>
    </Box>
  );
};

export default Input;
