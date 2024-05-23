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
      if (action === 'create') {
        const {
          addToCategories = [],
          addToResource,
          addToEntity,
          addToList,
          entityId,
          payload,
          entity,
        } = variables;

        if (entity === 'item') {


          const listItem = await resolveState({
            resource: 'listItems',
            variables: {
              payload,
              entity: 'listItem',
              itemId: data.id
            },
            action: 'create'
          });

          await resolveState({
            resource: 'lists',
            variables: {
              entity: 'list',
              addToList: 'selectableItems',
              itemId: listItem.id,
              entityId
            },
            action: 'add'
          });


          for(let categoryId of addToCategories) {
            await resolveState({
              resource: 'categories',
              variables: {
                entity: 'category',
                addToList: 'items',
                itemId: data.id,
                entityId: categoryId
              },
              action: 'add'
            });
          }

          await queryClient.invalidateQueries({ queryKey: ['items'] });
          await queryClient.invalidateQueries({ queryKey: ['listItems'] });
          await queryClient.invalidateQueries({ queryKey: ['lists'] });

        } else {

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

          await queryClient.invalidateQueries({ queryKey: [resource] });
          await queryClient.invalidateQueries({ queryKey: [addToResource] });
        }
      }
    }
  });

  return { mutate: mutateAsync, isPending, isError, isIdle };
};
