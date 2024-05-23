import { Variables, State } from '../../definitions/resolvers';

import { commonResolvers } from './common';
import { itemResolvers } from './items';
import { allergenicResolvers } from './allergens';
import { imageResolvers } from './images';
import { slideResolvers } from './slides';
import { screensaverResolvers } from './screensaver';
import { categoryResolvers } from './categories';
import { listResolvers } from './lists';
import { listItemResolvers } from './listItems';

export const moveArrayItem = (
  array: Array<string>,
  from: number,
  to: number
): string[] => {
  array.splice(to, 0, array.splice(from, 1)[0]);
  return [...array];
};

export const resolvers = (
  entity: string
): { [key: string]: (state: State, variables: Variables) => {} } => {
  return {
    ...allergenicResolvers(),
    ...commonResolvers({ entity }),
    ...imageResolvers(),
    ...itemResolvers(),
    ...screensaverResolvers(),
    ...slideResolvers(),
    ...categoryResolvers(),
    ...listResolvers(),
    ...listItemResolvers()
  };
};
