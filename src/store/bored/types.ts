type Bored = {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
};

export type BoredSliceState = {
  bored: Bored;
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
};
