import { ComponentType, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks';

export const withAuth = <TProps extends { redir?: string }>(Wrapped: ComponentType<TProps>) => {
  return (props?: TProps) => {
    const auth = useAuth();

    const location = useLocation();
    useEffect(() => {
      auth.check().then((valid) => {
        if (!valid) {
          auth.signout();
        }
      });
    }, [auth]);

    if (!auth?.user) {
      return <Navigate to={props?.redir || '/login'} state={{ redir: location.pathname }} />;
    }

    return <Wrapped {...props!}></Wrapped>;
  };
};
