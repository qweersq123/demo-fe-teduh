import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import LoginPage from './pages/teduhPages/LoginPage';
import HalamanUtama from './pages/teduhPages/HalamanUtama';

export default function Routes() {
    const routes = useRoutes([
        {
            path: '/login',
            element: <LoginPage/>
        },
        {
            path: '/utama',
            element: <HalamanUtama/>
        }
    ]);

    return (
        <>
            {routes}
            <Outlet />
        </>
    )
}