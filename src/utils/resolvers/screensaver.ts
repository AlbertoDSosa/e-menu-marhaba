import { screensaverActions } from '../actions/types';
import { State, Variables, Resolution } from '../../definitions/resolvers';
import { moveArrayItem } from '../resolvers';

export const screensaverResolvers = () => {
  return {
    [screensaverActions.ADD_SELECTABLE_SLIDE]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { itemId } = variables.payload;
      const oldSelectableSlides = state.selectableSlides;
      const newSelectableSlides = [...oldSelectableSlides, itemId];

      return {
        newState: {
          ...state,
          selectableSlides: newSelectableSlides
        },
        newEntity: newSelectableSlides
      };
    },
    [screensaverActions.ADD_SLIDE]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { itemId: slideId } = variables.payload;
      const oldSlides = state.slides;
      const newSelectableSlides = state.selectableSlides!.filter(
        (slide: string) => slide !== slideId
      );
      return {
        newState: {
          ...state,
          slides: [...(oldSlides as string[]), slideId],
          selectableSlides: newSelectableSlides
        },
        newEntity: newSelectableSlides
      };
    },
    [screensaverActions.REMOVE_SLIDE]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { itemId: slideId } = variables.payload;
      const oldSelectableslides = state.selectableSlides;
      const newSlides = state.slides!.filter(
        (slide: string) => slide !== slideId
      );
      return {
        newState: {
          ...state,
          selectableSlides: [...oldSelectableslides, slideId],
          slides: newSlides
        },
        newEntity: newSlides
      };
    },
    [screensaverActions.REMOVE_SELECTABLE_SLIDE]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { itemId: slideId } = variables.payload;
      const newSeletableSlides = state.selectableSlides!.filter(
        (slide: string) => slide !== slideId
      );
      return {
        newState: {
          ...state,
          selectableSlides: newSeletableSlides
        },
        newEntity: newSeletableSlides
      };
    },
    [screensaverActions.REORDER_SLIDES]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { to, from } = variables.payload;

      const newScreensaverSlides = moveArrayItem(state.slides, from, to);

      return {
        newState: {
          ...state,
          slides: newScreensaverSlides
        },
        newEntity: newScreensaverSlides
      };
    },
    [screensaverActions.UPDATE_TIME_TO_SHOW]: (
      state: State,
      variables: Variables
    ): Resolution => {
      const { payload } = variables;

      return {
        newState: {
          ...state,
          timeToShow: payload
        },
        newEntity: payload
      };
    }
  };
};
