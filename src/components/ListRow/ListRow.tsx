import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { Box, Checkbox, ListItem, Typography } from '@mui/material';
import format from 'date-fns/format';
import React from 'react';

import { useAppDispatch } from '../../store/store';
import { toggleCompleteTask, togglePin } from '../../store/tasks/slice';
import { TaskItem } from '../../store/tasks/types';

import styles from './ListRow.module.scss';

type ListRowProps = {
  task: TaskItem;
  onDeleteTask: (id: string) => void;
};

const ListRow: React.FC<ListRowProps> = ({ task, onDeleteTask }) => {
  const dispatch = useAppDispatch();

  const date = format(task.createdAt, 'do MMM yyyy');

  const onTogglePin = () => {
    dispatch(togglePin(task.id));
  };

  const onCheckTask = () => {
    dispatch(toggleCompleteTask(task.id));
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
            <PushPinIcon className={styles.pinIcon} onClick={onTogglePin} />
          ) : (
            <PushPinOutlinedIcon
              className={styles.pinOutlinedIcon}
              onClick={onTogglePin}
            />
          )}
          <DeleteForeverIcon
            className={styles.deleteIcon}
            onClick={() => onDeleteTask(task.id)}
          />
        </Box>
        <span className={styles.date}>{date}</span>
      </Box>
    </ListItem>
  );
};

export default ListRow;
