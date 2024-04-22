import { useMutation as Mutation, useQueryClient } from '@tanstack/react-query';
import { resolveState } from '../utils/resolveState';

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

type MutationsArgs = {
  resource: Resource;
  action: 'add' | 'reorder' | 'remove' | 'set' | 'create' | 'update';
};

export const useMutation = ({ resource, action }: MutationsArgs) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, isIdle } = Mutation({
    mutationFn: async (variables: any) => {
      return await resolveState({
        resource,
        variables,
        action
      });
    },
    onSuccess: async (data, variables) => {
      await queryClient.invalidateQueries({ queryKey: [resource] });

      if (action === 'create') {
        const { addToResource, addToList, addToEntity, entityId } = variables;

        await resolveState({
          resource: addToResource,
          variables: {
            entity: addToEntity,
            itemId: data.id,
            addToList,
            entityId
          },
          action: 'add'
        });
        await queryClient.invalidateQueries({ queryKey: [addToResource] });
      }
    }
  });

  return { mutate: mutateAsync, isPending, isError, isIdle };
};
