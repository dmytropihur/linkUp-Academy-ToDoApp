import { RootState } from '../store';

const selectDogImage = (state: RootState) => state.dogImage;

export default selectDogImage;
