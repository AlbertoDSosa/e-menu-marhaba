import { DisplayInfo } from 'definitions/models';

import { moveArrayItem } from '.';

import {
  ResolverParams,
  State,
  Variables,
  Resolution
} from '../../definitions/resolvers';

type UpdateObj = {
  state: State;
  variables: Variables;
};

const updateDisplayInfo = ({ state, variables }: UpdateObj) => {
  const { id, displayInfo, lang } = variables.payload;
  const oldValueState = state[id];
  const oldDisplayInfo: DisplayInfo = oldValueState.displayInfo;
  const newDisplayInfo: DisplayInfo = {
    ...oldDisplayInfo,
    [lang]: displayInfo
  };
  const newValueState = { ...oldValueState, displayInfo: newDisplayInfo };
  return newValueState;
};

export const commonResolvers = ({ entity }: ResolverParams) => {
  return {
    [`${entity}->updateDisplayInfo`]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { id } = variables.payload;
      const newEntity = updateDisplayInfo({
        state,
        variables
      });

      return {
        newState: {
          ...state,
          [id]: newEntity
        },
        newEntity
      };
    },
    [`${entity}->setActive`]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const id = variables.payload;
      const oldEntity = state[id];
      const newEntity = { ...oldEntity, active: !oldEntity.active };

      return {
        newState: {
          ...state,
          [id]: newEntity
        },
        newEntity
      };
    },
    [`${entity}->setShow`]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const id = variables.payload;
      const oldEntity = state[id];
      const newEntity = { ...oldEntity, show: !oldEntity.show };

      return {
        newState: {
          ...state,
          [id]: newEntity
        },
        newEntity
      };
    },
    [`${entity}->setShowPrice`]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const id = variables.payload;
      const oldEntity = state[id];
      const newEntity = { ...oldEntity, showPrice: !oldEntity.showPrice };

      return {
        newState: {
          ...state,
          [id]: newEntity
        },
        newEntity
      };
    },
    [`${entity}->setShowTitle`]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const id = variables.payload;
      const oldEntity = state[id];
      const newEntity = { ...oldEntity, showTitle: !oldEntity.showTitle };

      return {
        newState: {
          ...state,
          [id]: newEntity
        },
        newEntity
      };
    },
    [`${entity}->setShowDescription`]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const id = variables.payload;
      const oldEntity = state[id];
      const newEntity = {
        ...oldEntity,
        showDescription: !oldEntity.showDescription
      };

      return {
        newState: {
          ...state,
          [id]: newEntity
        },
        newEntity
      };
    },
    [`${entity}->setShowExtraInfo`]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const id = variables.payload;
      const oldEntity = state[id];
      const newEntity = {
        ...oldEntity,
        showExtraInfo: !oldEntity.showExtraInfo
      };

      return {
        newState: {
          ...state,
          [id]: newEntity
        },
        newEntity
      };
    },
    [`${entity}->setMainImage`]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { id, entityId } = variables.payload;
      const oldEntity = state[entityId];

      const newEntity = {
        ...oldEntity,
        mainImg: id
      };

      return {
        newState: {
          ...state,
          [entityId]: newEntity
        },
        newEntity
      };
    },
    [`${entity}->reorderItems`]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { entityId, from, to } = variables.payload;
      const oldEntity = state[entityId];

      const newItems = moveArrayItem(oldEntity.items, from, to);
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
    },
    [`${entity}->deleteAllItems`]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { entityId, items } = variables.payload;

      const oldEntity = state[entityId];

      const newEntity = {
        ...oldEntity,
        selectableItems: [...oldEntity.selectableItems, ...items],
        items: []
      };

      return {
        newState: {
          ...state,
          [entityId]: newEntity
        },
        newEntity
      };
    },
    [`${entity}->deleteItem`]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { entityId, itemId } = variables.payload;

      const oldEntity = state[entityId];

      const newItems = oldEntity.items.filter(
        (item: string) => item !== itemId
      );

      const newEntity = {
        ...oldEntity,
        selectableItems: [...oldEntity.selectableItems, itemId],
        items: newItems
      };

      return {
        newState: {
          ...state,
          [entityId]: newEntity
        },
        newEntity
      };
    },
    [`${entity}->addItem`]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { entityId, itemId } = variables.payload;

      const oldEntity = state[entityId];

      const newSelectableItems = oldEntity.selectableItems.filter(
        (item: string) => item !== itemId
      );

      const newItems = [...oldEntity.items, itemId];

      const newEntity = {
        ...oldEntity,
        selectableItems: newSelectableItems,
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
