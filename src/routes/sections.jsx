import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const PropertiesPage = lazy(() => import('src/pages/properties'));
export const TablePage = lazy(() => import('src/pages/table'));


// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    { path:'jerker',
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {  element: <IndexPage />,index:true},
        // { path: 'fastighetslista', element: <PropertiesPage /> },
        { path: 'fastighetslista', element: <TablePage /> },

      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
    {
      path: '/',
      element: <Navigate to='/jerker' replace />
    }
  ]);

  return routes;
}
