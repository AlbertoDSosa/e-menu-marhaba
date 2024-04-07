import {
  useQuery as query,
  useQueries as queries
} from '@tanstack/react-query';

import { get } from '../utils/storage';
import { Dictionary } from 'definitions/dataContext';

type Key =
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

type QueryArgs = {
  key: Key;
  id?: string;
};

type QueriesArgs = {
  key: string;
  ids: string[];
};

type QueryResp = {
  dictionary: Dictionary;
  collection: Dictionary[] | null;
  isLoading: boolean;
  isFetched: boolean;
  refetch: () => {};
};

export const useQuery = ({ key }: QueryArgs): QueryResp => {
  const { data, isLoading, isFetched, refetch } = query({
    queryKey: [key],
    queryFn: async () => await get(key)
  });

  return {
    collection: data ? Object.values(data) : null,
    dictionary: data,
    isLoading,
    isFetched,
    refetch
  };
};

export const useQueries = ({ key, ids }: QueriesArgs) => {
  return queries({
    queries: ids.map((id: string) => ({
      queryKey: [key, id],
      queryFn: () => async () => {
        const results = await get(key);
        return results[id];
      }
    }))
  });
};
