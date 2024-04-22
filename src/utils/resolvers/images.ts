import { Image } from 'definitions/models';

import { imageActions } from '../../utils/actions/types';

import { State, Variables, Resolution } from '../../definitions/resolvers';

export const imageResolvers = () => {
  return {
    [imageActions.CREATE]: (state: State, variables: Variables): Resolution => {
      const { payload } = variables;
      const { displayInfo, id, image, lang } = payload;
      const { title } = displayInfo[lang];

      const newImage: Image = {
        id,
        thumbnail: {
          src: '',
          title
        },
        full: {
          src: image,
          title
        }
      };

      return {
        newState: { ...state, [id]: newImage },
        newEntity: newImage
      };
    },
    [imageActions.DELETE]: (state: State, variables: Variables): State => {
      return { ...state };
    },
    [imageActions.UPDATE]: (state: State, variables: Variables): State => {
      return { ...state };
    }
  };
};
