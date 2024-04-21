import { createContext, FC, PropsWithChildren, useState } from 'react';
import { useStorage } from '../../hooks';
const KEY_LOGIN_USER_INFO = 'loginUserInfo';
const KEY_LOGIN_USER_TOKEN = 'token';

export const AuthContext = createContext<IAuthContext>(null!);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { local, session } = useStorage();
  const u = session(KEY_LOGIN_USER_INFO) || null;
  const [user, setUser] = useState(u || null!);

  const signin = async ({ token }: { token: string }) => {
    local(KEY_LOGIN_USER_TOKEN, token);

    const loginUser = null;
    setUser(loginUser!);

    session(KEY_LOGIN_USER_INFO, loginUser);
    return { user: loginUser };
  };

  const signout = async () => {
    setUser(null!);

    session(KEY_LOGIN_USER_INFO, null);
  };

  return <AuthContext.Provider value={{ user, signin, signout }}>{children}</AuthContext.Provider>;
};

export default void 0;
