import { useReducer, useEffect, useState, useCallback } from 'react';
import { useStorageItem } from './useStorage';

import initialData from '../utils/initial-data';
import systemData from '../utils/system-data';

import { State, Action } from 'definitions/reducers';

import { reducers } from '../utils/reducers';

const initState = (initialData: any) => initialData;

const reducer = (state: State, action: Action) => {
  const { entity, collection, type, payload } = action;

  if (type === 'state->init') {
    const _payload =
      typeof payload === 'string' ? JSON.parse(payload) : payload;
    return initState(_payload);
  }

  const actionReducer = reducers(entity, collection)[type];
  return actionReducer ? actionReducer(state, action) : state;
};

function useDatabase(): any {
  const [initialState, setInitialState] = useStorageItem('state', initialData);
  const [state, dispatch] = useReducer(reducer, initialState, initState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (initialState) {
      dispatch({
        type: 'state->init',
        payload: initialState,
        collection: '',
        entity: ''
      });
    }
  }, [initialState]);

  useEffect(() => {
    if (Boolean(state)) {
      const _initialState =
        typeof initialState === 'string'
          ? JSON.parse(initialState)
          : initialState;
      if (state !== _initialState) {
        setInitialState(state);
      }
      setLoading(false);
    }
  }, [state]);

  return {
    state,
    system: systemData,
    dispatch,
    loading
  };
}

export default useDatabase;
