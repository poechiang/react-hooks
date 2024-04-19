export type IAction = <T>(key: string, value?: T, expire?: number) => T | null | void;
export interface IStorageAction {
  local: IAction;
  session: IAction;
  cookie: IAction;
}
const buildStorageAction =
  (storage: Storage): IAction =>
  <T>(key: string, value?: T, expire?: number): T | null | void => {
    if (null === value) {
      storage.removeItem(key);
    } else if (undefined === value) {
      const { value, expire } = JSON.parse(storage.getItem(key) || "null") || {};
      if (expire && expire < Date.now()) {
        return null;
      }
      return value as T;
    } else {
      storage.setItem(key, JSON.stringify({ value, expire: expire || 0 }));
    }
  };

export const local = buildStorageAction(localStorage);
export const session = buildStorageAction(sessionStorage);
export const cookie = buildStorageAction(localStorage);
