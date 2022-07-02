type DogImage = {
  message: string;
  status: string;
};

export type DogImageSliceState = {
  dogImage: DogImage;
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
};
