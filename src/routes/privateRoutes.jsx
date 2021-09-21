import PersonalEdit from "@page/personalEdit";
import Admin from '@page/admin';
import Home from "@page/home"

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
];

export default privateRoutes;