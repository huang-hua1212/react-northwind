import { Route, Redirect } from 'react-router';

import { Content as F_Content}   from './components/Frontend/Content';
import { Counter as F_Counter } from './components/Frontend/Counter';
import { FetchData as F_FetchData }  from './components/Frontend/FetchData';
import { Frontend as F_Frontend }  from './components/Frontend/Frontend';
import { Home as F_Home } from './components/Frontend/Home';
import { Orders as F_Orders } from './components/Frontend/Orders';
import { ReactTest as F_ReactTest }  from './components/Frontend/ReactTest';

import { Backend as B_Backend } from './components/Backend/Backend';
import { Orders as B_Orders } from './components/Backend/Orders';
import { Customers as B_Customers } from './components/Backend/Customers';
import { Products as B_Products } from './components/Backend/Products';
import { Suppliers as B_Suppliers } from './components/Backend/Suppliers';


const routes = [
    {
        path: '/frontend',
        component: F_Frontend,
        breadcrumbName: 'Frontend',
        routes: [
            {
                path: '',
                component: F_Home,
                breadcrumbName: 'Frontend_Home',
            },
            {
                path: '/frontend/counter',
                component: F_Counter,
                breadcrumbName: 'Frontend_Counter',
            },
            {
                path: '/frontend/fetch-data',
                component: F_FetchData,
                breadcrumbName: 'Frontend_FetchData',
            },
            {
                path: '/frontend/orders',
                component: F_Orders,
                breadcrumbName: 'Frontend_Orders',
            },
            {
                path: '/frontend/content',
                component: F_Content,
                breadcrumbName: 'Frontend_Content',
            },
            {
                path: '/frontend/react-test',
                component: F_ReactTest,
                breadcrumbName: 'Frontend_ReactTest',
            },
        ]
    },
    {
        path: '/backend',
        component: B_Backend,
        breadcrumbName: 'Backend',
        routes: [
            {
                path: '/backend/customers',
                component: B_Customers,
                breadcrumbName: 'Backend_Customers',
            },
            {
                path: '/backend/products',
                component: B_Products,
                breadcrumbName: 'Backend_Products',
            },
            {
                path: '/backend/orders',
                component: B_Orders,
                breadcrumbName: 'Backend_Orders',
            },
            {
                path: '/backend/suppliers',
                component: B_Suppliers,
                breadcrumbName: 'Backend_Suppliers',
            },
        ]
    },
    {
        path: '/',
        exact: true,
        //breadcrumbName: 'Frontend_Home',
        render: () => <Redirect to={"/frontend"} />
    },
];

export default routes;