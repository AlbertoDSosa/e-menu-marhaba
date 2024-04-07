import { useMutation as Mutation } from '@tanstack/react-query';

import { set, get } from '../utils/storage';
import { Resolution, State } from '../definitions/resolvers';
import {
  SetProps,
  AddProps,
  RemoveProps,
  UpdateProps,
  CreateProps,
  DeleteProps,
  ReorderProps
} from '../definitions/dataContext';
import actions from '../utils/actions';

type Resource =
  | 'lists'
  | 'items'
  | 'categories'
  | 'listItems'
  | 'pageMenus'
  | 'pageMenuItems'
  | 'images'
  | 'slides'
  | 'sections'
  | 'generalInfo'
  | 'screensaver'
  | 'languages'
  | 'variants'
  | 'allergens'
  | 'templates'
  | 'modals'
  | 'pages'
  | 'pageSections';

// type MutationData =
//   | SetProps
//   | AddProps
//   | RemoveProps
//   | UpdateProps
//   | CreateProps
//   | DeleteProps
//   | ReorderProps;

type MutationsArgs = {
  resource: Resource;
  action: 'add' | 'reorder' | 'remove' | 'set' | 'create' | 'update';
};

export const useMutation = ({ resource, action }: MutationsArgs) => {
  const { mutate, isPending, isError, isIdle } = Mutation({
    mutationFn: async (variables: any) => {
      const state: State = await get(resource);
      const { newState, newEntity } = actions[action](
        state,
        variables
      ) as Resolution;
      await set(resource, newState);
      return newEntity;
    }
  });

  return { mutate, isPending, isError, isIdle };
};
