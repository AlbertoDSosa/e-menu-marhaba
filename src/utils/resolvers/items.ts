import { itemActions } from '../../utils/actions/types';

import { State, Variables, Resolution } from '../../definitions/resolvers';
import { Product } from 'definitions/models';

export const itemResolvers = () => {
  return {
    [itemActions.UPDATE_ITEM_PRICE]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { id, price } = variables.payload;
      const oldItem = state[id];
      const newItem = { ...oldItem, price };

      return {
        newState: { ...state, [id]: newItem },
        newEntity: newItem
      };
    },
    [itemActions.UPDATE_ITEM_VARIANT_PRICE]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { itemId, variantId, price } = variables.payload;
      const oldItem = state[itemId];

      const newItemVariantPrices = {
        ...oldItem.itemVariantPrices,
        [variantId]: price
      };

      const newItem = { ...oldItem, itemVariantPrices: newItemVariantPrices };

      return {
        newState: { ...state, [itemId]: newItem },
        newEntity: newItem
      };
    },
    [itemActions.UPDATE_ITEM_NUMBER]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { id, number } = variables.payload;
      const oldItem = state[id];
      const newItem = { ...oldItem, number };

      return {
        newState: { ...state, [id]: newItem },
        newEntity: newItem
      };
    },
    [itemActions.ADD_IMAGE]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { payload } = variables;
      const { id, entityId } = payload;
      const oldItem = state[entityId];
      const oldImages = oldItem.images;
      const newImages = [...oldImages, id];

      const newItem = { ...oldItem, images: newImages };

      return {
        newState: { ...state, [entityId]: newItem },
        newEntity: newItem
      };
    },
    [itemActions.CREATE_ITEM]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { payload } = variables;
      const { id, displayInfo } = payload;

      const newItem: Product = {
        id,
        displayInfo,
        type: 'product',
        price: {
          amount: '0.00'
        },
        defaultImg: 'image->item->product->default-1',
        mainImg: '',
        images: [],
        hasVariants: false,
        hasAllergens: false,
        number: '0',
        active: true,
      };

      return {
        newState: { ...state, [id]: newItem },
        newEntity: newItem
      };
    },
  };
};
