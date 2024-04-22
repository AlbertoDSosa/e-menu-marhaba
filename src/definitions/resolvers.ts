import { List, PageMenu } from './models';

export type ResolverParams = {
  entity: string;
};

export type Resolution = {
  newState: State;
  newEntity: any;
};

type Dictionary = {
  [key: string]: any;
};

export type Variables = {
  type: string;
  entity: string;
  payload: any;
};

export type State = {
  [key: string]: any;
};
