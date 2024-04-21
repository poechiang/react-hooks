import { createContext } from 'react';

export const AuthContext = createContext<IAuthContext>(null!);
export * from './Provider';
export * from './withAuth';
