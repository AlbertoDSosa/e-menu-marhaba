import { Product } from 'definitions/models';
import { allergenicActions } from '../../utils/actions/types';
import { moveArrayItem } from '.';

import { ReducerParams, State, Action } from 'definitions/reducers';
export const allergenicReducers = ({ entity, collection }: ReducerParams) => {
  return {
    [allergenicActions.REORDER]: (state: State, action: Action): any => {
      const { entityId, from, to } = action.payload;
      const oldEntity: Product = state[collection][entityId];

      const newItems = moveArrayItem(oldEntity.allergens!, from, to);
      const newEntity = {
        ...oldEntity,
        allergens: newItems
      };

      return {
        ...state,
        [collection]: { ...state[collection], [entityId]: newEntity }
      };
    },
    [allergenicActions.REMOVE_ALL]: (state: State, action: Action): any => {
      const { entityId, items } = action.payload;

      const oldEntity: Product = state[collection][entityId];

      const newEntity = {
        ...oldEntity,
        selectableAllergens: [...oldEntity.selectableAllergens!, ...items],
        allergens: []
      };

      return {
        ...state,
        [collection]: { ...state[collection], [entityId]: newEntity }
      };
    },
    [allergenicActions.REMOVE]: (state: State, action: Action): any => {
      const { entityId, itemId } = action.payload;

      const oldEntity: Product = state[collection][entityId];

      const newItems = oldEntity.allergens!.filter(
        (item: string) => item !== itemId
      );

      const newEntity = {
        ...oldEntity,
        selectableAllergens: [...oldEntity.selectableAllergens!, itemId],
        allergens: newItems
      };

      return {
        ...state,
        [collection]: { ...state[collection], [entityId]: newEntity }
      };
    },
    [allergenicActions.ADD]: (state: State, action: Action): any => {
      const { entityId, itemId } = action.payload;

      const oldEntity: Product = state[collection][entityId];

      const newSelectableItems = oldEntity.selectableAllergens!.filter(
        (item) => item !== itemId
      );

      const newItems = [...oldEntity.allergens!, itemId];

      const newEntity: Product = {
        ...oldEntity,
        selectableAllergens: newSelectableItems,
        allergens: newItems
      };

      return {
        ...state,
        [collection]: { ...state[collection], [entityId]: newEntity }
      };
    }
  };
};
