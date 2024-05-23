import { listActions } from '../actions/types';

import { State, Variables, Resolution } from 'definitions/resolvers';

export const listResolvers = () => {
  return {
    [listActions.ADD_SELECTABLE_ITEM]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { entityId, itemId } = variables.payload;

      const oldEntity = state[entityId];

      const newItems = [...oldEntity.selectableItems, itemId];

      const newEntity = {
        ...oldEntity,
        selectableItems: newItems
      };

      return {
        newState: {
          ...state,
          [entityId]: newEntity
        },
        newEntity
      };
    }

  };
};
