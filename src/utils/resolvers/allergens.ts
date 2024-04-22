// import { Product } from '../../definitions/models';
import { allergenicActions } from '../../utils/actions/types';
import { moveArrayItem } from '.';

import { State, Variables, Resolution } from '../../definitions/resolvers';
export const allergenicResolvers = () => {
  return {
    [allergenicActions.REORDER]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { entityId, from, to } = variables.payload;
      const oldEntity = state[entityId];

      const newItems = moveArrayItem(oldEntity.allergens!, from, to);
      const newEntity = {
        ...oldEntity,
        allergens: newItems
      };

      return {
        newState: {
          ...state,
          [entityId]: newEntity
        },
        newEntity
      };
    },
    [allergenicActions.REMOVE_ALL]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { entityId, items } = variables.payload;

      const oldEntity = state[entityId];

      const newEntity = {
        ...oldEntity,
        selectableAllergens: [...oldEntity.selectableAllergens!, ...items],
        allergens: []
      };

      return {
        newState: {
          ...state,
          [entityId]: newEntity
        },
        newEntity
      };
    },
    [allergenicActions.REMOVE]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { entityId, itemId } = variables.payload;

      const oldEntity = state[entityId];

      const newItems = oldEntity.allergens!.filter(
        (item: string) => item !== itemId
      );

      const newEntity = {
        ...oldEntity,
        selectableAllergens: [...oldEntity.selectableAllergens!, itemId],
        allergens: newItems
      };

      return {
        newState: {
          ...state,
          [entityId]: newEntity
        },
        newEntity
      };
    },
    [allergenicActions.ADD]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { entityId, itemId } = variables.payload;

      const oldEntity = state[entityId];

      const newSelectableItems = oldEntity.selectableAllergens!.filter(
        (item: string) => item !== itemId
      );

      const newItems = [...oldEntity.allergens!, itemId];

      const newEntity = {
        ...oldEntity,
        selectableAllergens: newSelectableItems,
        allergens: newItems
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
