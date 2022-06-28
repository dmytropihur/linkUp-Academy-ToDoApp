import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectTasks } from '../../store/tasks/selectors';
import Input from '../Input/Input';
import ListRow from '../ListRow/ListRow';

import styles from './List.module.scss';

const List: React.FC = () => {
  const { items } = useSelector(selectTasks);

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
          {items.map((item, index) => {
            if (!item.completed) {
              return <ListRow key={item.id} task={item} index={index} />;
            }

            return '';
          })}
        </ul>
      </Box>
      <Box className={styles.listWrapper}>
        <Typography variant="h4">Closed Tasks</Typography>
        <ul className={styles.list}>
          {items.map((item, index) => {
            if (item.completed) {
              return <ListRow key={item.id} task={item} index={index} />;
            }

            return '';
          })}
        </ul>
      </Box>
    </Box>
  );
};

export default List;
