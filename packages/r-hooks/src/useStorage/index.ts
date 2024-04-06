import { createContext, useContext } from "react";
import { cookie, IStorageAction, local, session } from "./storage";

export const StorageContext = createContext<IStorageAction>({
  local,
  session,
  cookie,
});

export const useStorage = () => {
  return useContext(StorageContext);
};
