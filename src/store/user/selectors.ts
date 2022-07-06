import { RootState } from '../store';

const selectUser = (state: RootState) => state.user;

export default selectUser;
