import Status from '../types';

type CatFact = {
  fact: string;
  length: number;
};

export type CatFactSliceState = {
  catFact: CatFact;
  status: Status;
};
