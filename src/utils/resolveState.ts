import { set, get } from '../utils/storage';
import { Resolution, State } from '../definitions/resolvers';
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

type resolveStateProps = {
  resource: Resource;
  action: 'add' | 'reorder' | 'remove' | 'set' | 'create' | 'update';
  variables: any;
};

export const resolveState = async ({
  resource,
  action,
  variables
}: resolveStateProps) => {
  const state: State = await get(resource);
  const { newState, newEntity } = actions[action](
    state,
    variables
  ) as Resolution;

  await set(resource, newState);
  return newEntity;
};
