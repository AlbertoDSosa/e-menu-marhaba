import { DisplayInfo, List, PageMenu } from 'definitions/models';

import { moveArrayItem } from '.';

import { ReducerParams, State, Action } from 'definitions/reducers';

type UpdateObj = {
  state: State;
  action: Action;
  collection: string;
};

const updateDisplayInfo = ({ state, action, collection }: UpdateObj) => {
  const { id, displayInfo, lang } = action.payload;
  const oldValueState = state[collection][id];
  const oldDisplayInfo: DisplayInfo = oldValueState.displayInfo;
  const newDisplayInfo: DisplayInfo = {
    ...oldDisplayInfo,
    [lang]: displayInfo
  };
  const newValueState = { ...oldValueState, displayInfo: newDisplayInfo };
  return newValueState;
};

export const commonReducers = ({ entity, collection }: ReducerParams) => {
  return {
    [`${entity}->updateDisplayInfo`]: (state: State, action: Action): State => {
      const { id } = action.payload;
      const newEntity = updateDisplayInfo({
        state,
        action,
        collection
      });

      return {
        ...state,
        [collection]: { ...state[collection], [id]: newEntity }
      };
    },
    [`${entity}->setActive`]: (state: State, action: Action): State => {
      const id = action.payload;
      const oldEntity = state[collection][id];
      const newEntity = { ...oldEntity, active: !oldEntity.active };

      return {
        ...state,
        [collection]: { ...state[collection], [id]: newEntity }
      };
    },
    [`${entity}->setShow`]: (state: State, action: Action): State => {
      const id = action.payload;
      const oldEntity = state[collection][id];
      const newEntity = { ...oldEntity, show: !oldEntity.show };

      return {
        ...state,
        [collection]: { ...state[collection], [id]: newEntity }
      };
    },
    [`${entity}->setShowPrice`]: (state: State, action: Action): State => {
      const id = action.payload;
      const oldEntity = state[collection][id];
      const newEntity = { ...oldEntity, showPrice: !oldEntity.showPrice };

      return {
        ...state,
        [collection]: { ...state[collection], [id]: newEntity }
      };
    },
    [`${entity}->setShowTitle`]: (state: State, action: Action): State => {
      const id = action.payload;
      const oldEntity = state[collection][id];
      const newEntity = { ...oldEntity, showTitle: !oldEntity.showTitle };

      return {
        ...state,
        [collection]: { ...state[collection], [id]: newEntity }
      };
    },
    [`${entity}->setShowDescription`]: (
      state: State,
      action: Action
    ): State => {
      const id = action.payload;
      const oldEntity = state[collection][id];
      const newEntity = {
        ...oldEntity,
        showDescription: !oldEntity.showDescription
      };

      return {
        ...state,
        [collection]: { ...state[collection], [id]: newEntity }
      };
    },
    [`${entity}->setShowExtraInfo`]: (state: State, action: Action): State => {
      const id = action.payload;
      const oldEntity = state[collection][id];
      const newEntity = {
        ...oldEntity,
        showExtraInfo: !oldEntity.showExtraInfo
      };

      return {
        ...state,
        [collection]: { ...state[collection], [id]: newEntity }
      };
    },
    [`${entity}->setMainImage`]: (state: State, action: Action): State => {
      const { id, entityId } = action.payload;
      const oldEntity = state[collection][entityId];

      const newEntity = {
        ...oldEntity,
        mainImg: id
      };

      return {
        ...state,
        [collection]: { ...state[collection], [entityId]: newEntity }
      };
    },
    [`${entity}->reorderItems`]: (state: State, action: Action): State => {
      const { entityId, from, to } = action.payload;
      const oldEntity: List | PageMenu = state[collection][entityId];

      const newItems = moveArrayItem(oldEntity.items, from, to);
      const newEntity: List | PageMenu = {
        ...oldEntity,
        items: newItems
      };

      console.log('reducer', newEntity);

      return {
        ...state,
        [collection]: { ...state[collection], [entityId]: newEntity }
      };
    },
    [`${entity}->deleteAllItems`]: (state: State, action: Action): State => {
      const { entityId, items } = action.payload;

      const oldEntity: List | PageMenu = state[collection][entityId];

      const newEntity: List | PageMenu = {
        ...oldEntity,
        selectableItems: [...oldEntity.selectableItems, ...items],
        items: []
      };

      return {
        ...state,
        [collection]: { ...state[collection], [entityId]: newEntity }
      };
    },
    [`${entity}->deleteItem`]: (state: State, action: Action): State => {
      const { entityId, itemId } = action.payload;

      const oldEntity: List | PageMenu = state[collection][entityId];

      const newItems = oldEntity.items.filter(
        (item: string) => item !== itemId
      );

      const newEntity: List | PageMenu = {
        ...oldEntity,
        selectableItems: [...oldEntity.selectableItems, itemId],
        items: newItems
      };

      return {
        ...state,
        [collection]: { ...state[collection], [entityId]: newEntity }
      };
    },
    [`${entity}->addItem`]: (state: State, action: Action): State => {
      const { entityId, itemId } = action.payload;

      const oldEntity: List | PageMenu = state[collection][entityId];

      const newSelectableItems = oldEntity.selectableItems.filter(
        (item) => item !== itemId
      );

      const newItems = [...oldEntity.items, itemId];

      const newEntity = {
        ...oldEntity,
        selectableItems: newSelectableItems,
        items: newItems
      };

      return {
        ...state,
        [collection]: { ...state[collection], [entityId]: newEntity }
      };
    }
  };
};
