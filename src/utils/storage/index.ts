import { Drivers, Storage } from '@ionic/storage';

const storage = new Storage({
  name: '__mydb',
  driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
});

await storage.create();

export const get = async (key: string) => {
  const value = await storage.get(key);
  return Boolean(value) ? value : null;
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
