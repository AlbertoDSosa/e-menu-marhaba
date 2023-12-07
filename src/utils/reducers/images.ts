import { Image } from 'definitions/models';

import { imageActions } from '../../utils/actions/types';

import { ReducerParams, State, Action } from 'definitions/reducers';

export const imageReducers = ({ entity, collection }: ReducerParams) => {
  return {
    [imageActions.CREATE]: (state: State, action: Action): State => {
      const { images } = state;
      const { payload } = action;
      const { displayInfo, id, image, lang } = payload;
      const { title } = displayInfo[lang];

      const newImage: Image = {
        id,
        thumbnail: {
          src: image,
          title
        },
        full: {
          src: image,
          title
        }
      };

      return { ...state, images: { ...images, [id]: newImage } };
    },
    [imageActions.DELETE]: (state: State, action: Action): State => {
      return { ...state };
    },
    [imageActions.UPDATE]: (state: State, action: Action): State => {
      return { ...state };
    }
  };
};
