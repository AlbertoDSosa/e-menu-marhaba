import { useState, useEffect, useCallback } from 'react';
import { Drivers, Storage } from '@ionic/storage';
import { AvailableResult } from '../utils/storage/models';
import initialData from '../utils/initial-data';
import { Dictionary } from '../definitions/dataContext';

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

interface StorageResult extends AvailableResult {
  get: (key: string) => Promise<string | null>;
  set: (key: string, value: Dictionary) => Promise<void>;
  remove: (key: string) => void;
  getKeys: () => Promise<string[]>;
  clear: () => Promise<void>;
  databaseSeedeer: () => Promise<void>;
}

type StorageItemResult<T> = [T | undefined, (value: T) => Promise<void>];

const storage = new Storage({
  name: 'marhaba_db',
  driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
});

await storage.create();

export function useStorage(): StorageResult {
  const get = useCallback(async (key: string) => {
    const value = await storage.get(key);
    return Boolean(value) ? JSON.parse(value) : null;
  }, []);

  const set = useCallback(async (key: string, value: Dictionary) => {
    return await storage.set(key, JSON.stringify(value));
  }, []);

  const remove = useCallback(async (key: string) => {
    return await storage.remove(key);
  }, []);

  const getKeys = useCallback(async (): Promise<string[]> => {
    return await storage.keys();
  }, []);

  const clear = useCallback(async () => {
    return await storage.clear();
  }, []);

  const checkIfDatabaseIsReady = useCallback(async () => {
    return Boolean((await getKeys()).length);
  }, []);

  const databaseSeedeer = useCallback(async () => {
    if (!(await checkIfDatabaseIsReady())) {
      for (const key in initialData) {
        await set(key, initialData[key as Key]);
      }
    }

    return;
  }, []);

  return {
    get,
    set,
    remove,
    getKeys,
    clear,
    isAvailable: true,
    databaseSeedeer
  };
}

export function useStorageItem<T>(
  key: string,
  initialValue?: T
): StorageItemResult<T> {
  const [storedValue, setStoredValue] = useState<T>();

  const setValue = async (value: T) => {
    try {
      setStoredValue(value);
      await storage.set(
        key,
        typeof value === 'string' ? value : JSON.stringify(value)
      );
    } catch (e) {
      console.error('setValue', e);
    }
  };

  useEffect(() => {
    async function loadValue() {
      try {
        const result = await storage.get(key);

        if (!Boolean(result) && Boolean(initialValue)) {
          const value =
            typeof initialValue === 'string'
              ? initialValue
              : JSON.stringify(initialValue);
          await setValue(value as any);
        } else {
          setStoredValue(
            typeof result === 'string' ? result : JSON.parse(result)
          );
        }
      } catch (e) {
        console.error('setValue', e);
      }
    }

    (async () => {
      await loadValue();
    })();
  }, [storage, setStoredValue, initialValue, key]);

  return [storedValue, setValue];
}
