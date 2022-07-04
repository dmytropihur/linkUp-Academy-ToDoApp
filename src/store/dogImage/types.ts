import Status from '../types';

type DogImage = {
  message: string;
  status: string;
};

export type DogImageSliceState = {
  dogImage: DogImage;
  status: Status;
};
