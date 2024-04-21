declare interface IAuthData {
  token?: string;
  user?: IUser;
}
declare interface IAuthContext extends IAuthData {
  signin: (data: ILoginData) => Promise<IAuthData>;
  signout: () => Promise<void>;
}
