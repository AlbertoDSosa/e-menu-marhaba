import { screensaverActions } from '../actions/types';
import { State, Variables, Resolution } from '../../definitions/resolvers';
import { moveArrayItem } from '../resolvers';

export const screensaverResolvers = () => {
  return {
    [screensaverActions.ADD_SELECTABLE_SLIDE]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { id } = variables.payload;
      const oldSelectableSlides = state.screensaver.selectableSlides;
      const newSelectableSlides = [...oldSelectableSlides, id];
      return {
        newState: {
          ...state,
          screensaver: {
            ...state.screensaver,
            selectableSlides: newSelectableSlides
          }
        },
        newEntity: newSelectableSlides
      };
    },
    [screensaverActions.ADD_SLIDE]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { itemId: slideId } = variables.payload;
      const oldSlides = state.screensaver.slides;
      const newSelectableSlides = state.screensaver.selectableSlides!.filter(
        (slide: string) => slide !== slideId
      );
      return {
        newState: {
          ...state,
          screensaver: {
            ...state.screensaver,
            slides: [...oldSlides, slideId],
            selectableSlides: newSelectableSlides
          }
        },
        newEntity: newSelectableSlides
      };
    },
    [screensaverActions.REMOVE_SLIDE]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { itemId: slideId } = variables.payload;
      const oldSelectableslides = state.screensaver.selectableSlides;
      const newSlides = state.screensaver.slides!.filter(
        (slide: string) => slide !== slideId
      );
      return {
        newState: {
          ...state,
          screensaver: {
            ...state.screensaver,
            selectableSlides: [...oldSelectableslides, slideId],
            slides: newSlides
          }
        },
        newEntity: newSlides
      };
    },
    [screensaverActions.REORDER_SLIDES]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { to, from } = variables.payload;

      const newScreensaverSlides = moveArrayItem(
        state.screensaver.slides,
        from,
        to
      );

      return {
        newState: {
          ...state,
          screensaver: { ...state.screensaver, slides: newScreensaverSlides }
        },
        newEntity: newScreensaverSlides
      };
    }
  };
};
