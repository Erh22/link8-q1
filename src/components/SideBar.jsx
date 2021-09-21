import '@style';
import { useEffect, useState } from 'react/cjs/react.development';
import routes from '../routes';
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const SideBar = (props) => {
    const showSideBar = useSelector((state) => state.showSideBar)
    const state = useSelector((state) => state)
    const location = useLocation();
    const currentPage = location.pathname;

    // TODO : 1.判斷role === 'ADMIN' 才顯示會員管理
    // 2.個人資訊管理應為下拉選單
    useEffect(()=>{
        console.log('state.role',state.role)
    })
    return (
            <div className={`list ${showSideBar ? null : 'listClose'}`}>
                {routes.privateRoutes.map(route => (
                    <Link key={route.path} to={route.path}>
                        <div key={route.name} className={ currentPage === route.path ? 'active' : null }>
                            {route.name}
                        </div>
                    </Link>
                ))}
            </div>
    )
}
export default SideBar;