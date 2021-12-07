import { IRouteProps } from '@src/modules';
import { lazy } from 'react';

export const route = '/example-module';

const exampleModuleRoute: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('./ExampleModule')),
  name: 'ExampleModule',
  to: route,
};

export default exampleModuleRoute;
