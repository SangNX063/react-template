import { IRouteProps } from '@src/modules';
import { lazy } from 'react';

export const route = '/';

const HomeRoute: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('@modules/Home')),
  name: 'Home',
  to: route,
};

export default HomeRoute;
