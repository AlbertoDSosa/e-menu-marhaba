import React, {
  createContext,
  useContext,
  useEffect,
  PropsWithChildren
} from 'react';
import useDatabase from '../hooks/useDatabase';

import {
  SetProps,
  AddProps,
  RemoveProps,
  ReorderProps,
  UpdateProps,
  CreateProps,
  StateColletion,
  SystemCollection,
  GetDataProps,
  Results
} from 'definitions/dataContext';

import { add, remove, set, reorder, create, update } from '../utils/actions';

export interface DataContextState {
  get(props: GetDataProps): Results;
  reorder(props: ReorderProps): void;
  add(props: AddProps): void;
  remove(props: RemoveProps): void;
  set(props: SetProps): void;
  update(props: UpdateProps): void;
  create(props: CreateProps): void;
  loading: boolean;
}

const DataContext = createContext<DataContextState>({} as DataContextState);

export const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { state, system, dispatch, loading, init, isDatabaseReady } =
    useDatabase();

  useEffect(() => {
    if (isDatabaseReady) {
      init();
    }
  }, [isDatabaseReady]);

  return (
    <DataContext.Provider
      value={{
        loading,
        get({ collection, from }) {
          if (from === 'state') {
            return {
              collection: Object.values(state[collection as StateColletion]),
              dictionary: state[collection as StateColletion]
            };
          } else {
            return {
              collection: Object.values(system[collection as SystemCollection]),
              dictionary: system[collection as SystemCollection]
            };
          }
        },
        add(props) {
          add(dispatch, props);
        },
        reorder(props) {
          reorder(dispatch, props);
        },
        remove(props) {
          remove(dispatch, props);
        },
        set(props) {
          set(dispatch, props);
        },
        create(props) {
          create(dispatch, props);
        },
        update(props) {
          update(dispatch, props);
        }
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextState | any => useContext(DataContext);

export default DataContext;
