import {lazy,Suspense} from "react";
const Login = lazy(()=> import('@page/login'))
const Register = lazy(()=> import('@page/register'))

const publicRoutes = [
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: '/register',
        component: Register,
        exact: true,
    }
];
export default publicRoutes;