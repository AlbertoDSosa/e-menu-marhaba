export type ReducerParams = {
  collection: string;
  entity: string;
};

type Dictionary = {
  [key: string]: any;
};

export type Action = {
  type: string;
  entity: string;
  collection: string;
  payload: any;
};

export type State = {
  [key: string]: Dictionary;
};
