declare interface IAuthData {
  token?: string;
  user?: IUser;
}
declare interface IAuthContext extends IAuthData {
  signin: (data: ILoginData) => Promise<IAuthData>;
  check: () => Promise<boolean>;
  signout: () => Promise<void>;
}

declare interface RSAuthProviderProps extends RSProviderProps {
  onSignin: () => Promise;
  onCheck: () => Promise;
}
