import { ProductListItem } from 'definitions/models';
import { listItemActions } from '../actions/types';

import { State, Variables, Resolution } from 'definitions/resolvers';

export const listItemResolvers = () => {
  return {
    [listItemActions.CREATE_ITEM]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { payload } = variables;
      const { id, itemId } = payload;

      const newItem: ProductListItem = {
        id,
        itemId,
        active: true,
        type: 'product',
        show: true,
        showDescription: false,
        showExtraInfo: false,
        showItemDetail: true,
        showPrice: true,
        showTitle: true,
        template: ''
      };

      return {
        newState: { ...state, [id]: newItem },
        newEntity: newItem
      };
    },

  };
};
