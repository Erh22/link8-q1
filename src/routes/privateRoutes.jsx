import {lazy,Suspense} from "react";
const PersonalEdit = lazy(() => import('@page/personalEdit'))
const Admin = lazy(()=> import('@page/admin'))
const Home = lazy(() => import('@page/home'))
const MemberList = lazy(() => import('@page/memberList'))
const MemberGrid = lazy(() => import('@page//memberGrid'))

const privateRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
        backUrl: '/login',
        name: '首頁'
    },
    {
        path: '/account/profile-setting',
        component: PersonalEdit,
        exact: true,
        backUrl: '/login',
        name: '個人資訊管理'
    },
    {
        path: '/administrator',
        component: Admin,
        exact: true,
        backUrl: '/login',
        name: '會員管理'
    },
    {
        path: '/memberlist',
        component: MemberList,
        exact: true,
        backUrl: '/login',
        name: '列表式'
    },
    {
        path: '/membergrid',
        component: MemberGrid,
        exact: true,
        backUrl: '/login',
        name: '列表式'
    },

];

export default privateRoutes;