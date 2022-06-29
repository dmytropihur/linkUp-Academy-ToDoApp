import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../store/store';
import { selectTasks } from '../../store/tasks/selectors';
import { deleteTask } from '../../store/tasks/slice';
import Input from '../Input/Input';
import ListRow from '../ListRow/ListRow';
import SnackBar from '../SnackBar/SnackBar';

import styles from './List.module.scss';

const List: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { items } = useSelector(selectTasks);
  const dispatch = useAppDispatch();

  const onDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
    setOpen(true);
  };

  return (
    <Box className={styles.wrapper}>
      <Typography className={styles.title} variant="h1">
        My ToDo List
      </Typography>
      <Input />
      <Box className={styles.listWrapper}>
        <Typography className={styles.listTitle} variant="h4">
          Open Tasks
        </Typography>
        <ul className={styles.list}>
          {items.map((item) => {
            if (item.completed) return null;

            return (
              <ListRow key={item.id} task={item} onDeleteTask={onDeleteTask} />
            );
          })}
        </ul>
      </Box>
      <Box className={styles.listWrapper}>
        <Typography variant="h4">Closed Tasks</Typography>
        <ul className={styles.list}>
          {items.map((item) => {
            if (!item.completed) return null;

            return (
              <ListRow key={item.id} task={item} onDeleteTask={onDeleteTask} />
            );
          })}
        </ul>
      </Box>
      <SnackBar open={open} setOpen={setOpen}>
        The task was successfully deleted.
      </SnackBar>
    </Box>
  );
};

export default List;
