type CatFact = {
  fact: string;
  length: number;
};

export type CatFactSliceState = {
  catFact: CatFact;
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
};
