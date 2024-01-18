import { useReducer, useEffect, useState } from 'react';
import { useStorageItem } from './useStorage';

import initialData from '../utils/initial-data';
import systemData from '../utils/system-data';

import { State, Action } from 'definitions/reducers';

import { reducers } from '../utils/reducers';

const reducer = (state: State, action: Action) => {
  const { entity, collection, type, payload } = action;

  if (type === 'state->init') {
    const _payload =
      typeof payload === 'string' ? JSON.parse(payload) : payload;
    return _payload;
  }

  const actionReducer = reducers(entity, collection)[type];
  return actionReducer ? actionReducer(state, action) : state;
};

function useDatabase(): any {
  const [initialState, setInitialState] = useStorageItem('state', initialData);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isDatabaseReady, setIsDatabaseReady] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (initialState && !isDatabaseReady) {
      setIsDatabaseReady(true);
    }
  }, [initialState, isDatabaseReady]);

  useEffect(() => {
    if (Boolean(state)) {
      const _state = JSON.stringify(state);
      const _initialState =
        typeof initialState === 'string'
          ? initialState
          : JSON.stringify(initialState);
      if (_state !== _initialState) {
        setInitialState(state);
      }
      setLoading(false);
    }
  }, [state]);

  return {
    state,
    system: systemData,
    dispatch,
    loading,
    init() {
      dispatch({
        type: 'state->init',
        payload: initialState,
        collection: '',
        entity: ''
      });
    },
    isDatabaseReady
  };
}

export default useDatabase;
