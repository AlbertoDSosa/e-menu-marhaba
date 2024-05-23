import { categoryActions } from '../actions/types';

import { State, Variables, Resolution } from 'definitions/resolvers';

export const categoryResolvers = () => {
  return {
    [categoryActions.ADD_ITEM]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { entityId, itemId } = variables.payload;

      const oldEntity = state[entityId];

      const newItems = [...oldEntity.items, itemId];

      const newEntity = {
        ...oldEntity,
        items: newItems
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
