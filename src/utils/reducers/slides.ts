import {
  // DisplayInfo,
  Slide
} from 'definitions/models';

import { slideActions } from '../../utils/actions/types';

import { ReducerParams, State, Action } from 'definitions/reducers';

export const slideReducers = ({ entity }: ReducerParams) => {
  return {
    [slideActions.CREATE_SLIDE]: (state: State, action: Action): State => {
      const { slides } = state;
      const { payload } = action;
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
        ...state,
        slides: { ...slides, [newSlide.id]: newSlide }
      };
    },
    [slideActions.DELETE_SLIDE]: (state: State, action: Action): State => {
      return { ...state };
    },
    [slideActions.ADD_IMAGE]: (state: State, action: Action): State => {
      const { slides } = state;
      const { payload } = action;
      const { id, entityId } = payload;
      const oldSlide = slides[entityId];

      const oldImages = oldSlide.images;
      const newImages = [...oldImages, id];

      const newSlide = { ...oldSlide, images: newImages };

      return { ...state, slides: { ...slides, [entityId]: newSlide } };
    }
  };
};
