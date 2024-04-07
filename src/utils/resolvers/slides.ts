import {
  // DisplayInfo,
  Slide
} from 'definitions/models';

import { slideActions } from '../actions/types';

import {
  ResolverParams,
  State,
  Variables,
  Resolution
} from 'definitions/resolvers';

export const slideResolvers = ({ entity }: ResolverParams) => {
  return {
    [slideActions.CREATE_SLIDE]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { payload } = variables;
      const { displayInfo, id } = payload;
      const newSlide: Slide = {
        id,
        type: 'slide',
        active: true,
        template: `template->slide->${entity}->default`,
        defaultImg: `image->slide->${entity}->default-1`,
        mainImg: '',
        displayInfo,
        images: []
      };

      return {
        newState: {
          ...state,
          [newSlide.id]: newSlide
        },
        newEntity: newSlide
      };
    },
    [slideActions.DELETE_SLIDE]: (
      state: State,
      variables: Variables
    ): Resolution => {
      return {
        newState: { ...state },
        newEntity: {}
      };
    },
    [slideActions.ADD_IMAGE]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { payload } = variables;
      const { id, entityId } = payload;
      const oldSlide = state[entityId];

      const oldImages = oldSlide.images;
      const newImages = [...oldImages, id];
      const newSlide = { ...oldSlide, images: newImages };

      return {
        newState: { ...state, [entityId]: newSlide },
        newEntity: newSlide
      };
    }
  };
};
