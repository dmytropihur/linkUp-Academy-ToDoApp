import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { Box, Checkbox, ListItem, Typography } from '@mui/material';
import format from 'date-fns/format';
import React, { useState } from 'react';

import { useAppDispatch } from '../../store/store';
import {
  completeTask,
  deleteTask,
  pinTask,
  unpinTask,
} from '../../store/tasks/slice';
import { TaskItem } from '../../store/tasks/types';
import SnackBar from '../SnackBar/SnackBar';

import styles from './ListRow.module.scss';

type ListRowProps = {
  task: TaskItem;
  index: number;
};

const ListRow: React.FC<ListRowProps> = ({ task, index }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const date = format(task.createdAt, 'do MMM yyyy');

  const onPinTask = () => {
    dispatch(pinTask(index));
  };
  const onUnpinTask = () => {
    dispatch(unpinTask(task.id));
  };

  const onDeleteTask = () => {
    dispatch(deleteTask(task.id));
    setOpen(true);
  };

  const onCheckTask = () => {
    dispatch(completeTask(task.id));
  };

  return (
    <ListItem className={styles.item} disablePadding>
      <Checkbox defaultChecked={task.completed} onChange={onCheckTask} />
      <Typography className={task.completed ? styles.textChecked : styles.text}>
        {task.task}
      </Typography>
      <Box className={styles.box}>
        <Box className={styles.icons}>
          {task.pinned ? (
            <PushPinIcon className={styles.pinIcon} onClick={onUnpinTask} />
          ) : (
            <PushPinOutlinedIcon
              className={styles.pinOutlinedIcon}
              onClick={onPinTask}
            />
          )}
          <DeleteForeverIcon
            className={styles.deleteIcon}
            onClick={onDeleteTask}
          />
        </Box>
        <span className={styles.date}>{date}</span>
      </Box>
      <SnackBar open={open} setOpen={setOpen}>
        The task was successfully deleted.
      </SnackBar>
    </ListItem>
  );
};

export default ListRow;
