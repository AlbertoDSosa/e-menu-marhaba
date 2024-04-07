import { Drivers, Storage } from '@ionic/storage';
import initialData from '../initial-data';
// import { Dictionary } from 'definitions/dataContext';

const storage = new Storage({
  name: 'marhaba_db',
  driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
});

(async () => {
  await storage.create();
})();

export type Key =
  | 'lists'
  | 'items'
  | 'categories'
  | 'listItems'
  | 'pageMenus'
  | 'pageMenuItems'
  | 'images'
  | 'slides'
  | 'generalInfo'
  | 'screensaver'
  | 'languages'
  | 'variants'
  | 'allergens'
  | 'templates'
  | 'modals'
  | 'pages'
  | 'sections';

export const get = async (key: string) => {
  const value = await storage.get(key);
  return Boolean(value) ? JSON.parse(value) : null;
};

export const set = async (key: string, value: any) => {
  return await storage.set(key, JSON.stringify(value));
};

export const remove = async (key: string) => {
  return await storage.remove(key);
};

export const getKeys = async () => {
  return await storage.keys();
};

export const clear = async () => {
  return await storage.clear();
};

export const checkIfDatabaseIsReady = async () => {
  return Boolean((await getKeys()).length);
};

export const databaseSeedeer = async () => {
  if (!(await checkIfDatabaseIsReady())) {
    for (const key in initialData) {
      await set(key, initialData[key as Key]);
    }
  }

  return;
};
