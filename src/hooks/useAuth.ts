import { createContext, useContext } from 'react';

export const AuthContext = createContext<IAuthContext>(null!);
export const useAuth = () => useContext(AuthContext);
