import { commonReducers } from './common';
import { itemReducers } from './items';
import { imageReducers } from './images';
import { slideReducers } from './slides';
import { allergenicReducers } from './allergens';
import { screensaverReducers } from './screensaver';
import { Action, State } from 'definitions/reducers';
import { SET_LOADED_STATE } from '../../utils/actions/types';

export const moveArrayItem = (
  array: Array<string>,
  from: number,
  to: number
): string[] => {
  array.splice(to, 0, array.splice(from, 1)[0]);
  return [...array];
};

export const reducers = (
  entity: string,
  collection: string
): { [key: string]: (state: State, action: Action) => {} } => {
  return {
    // Initial
    [SET_LOADED_STATE]: (state: State, action: Action): State => {
      const { stateStorage } = action.payload;
      return { ...stateStorage };
    },
    //Common
    ...commonReducers({ entity, collection }),

    // Allergens
    ...allergenicReducers({ entity, collection }),

    // Items
    ...itemReducers(),

    // Screensaver
    ...screensaverReducers(),

    // Slides
    ...slideReducers({ entity, collection }),

    // Images
    ...imageReducers({ entity, collection })
  };
};
