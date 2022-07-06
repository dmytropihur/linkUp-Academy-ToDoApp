import { RootState } from '../store';

const selectCatFact = (state: RootState) => state.catFact;

export default selectCatFact;
