import '@style';
import UserSvg from '@image/user.svg'
import AdminSvg from '@image/admin.svg'
import ArrowSvg from '@image/arrow.svg'
import { useEffect, useState } from 'react/cjs/react.development';
import routes from '../routes';
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setMemberDropDownMenu, setAdminDropDownMenu } from '../store/reducer';

import { Collapse } from 'antd';
const { Panel } = Collapse;

const SideBar = (props) => {
    const dispatch = useDispatch();
    const showSideBar = useSelector((state) => state.showSideBar)
    const state = useSelector((state) => state)
    const memberDropDownMenu = useSelector((state) => state.memberDropDownMenu)
    const adminDropDownMenu = useSelector((state) => state.adminDropDownMenu)
    const location = useLocation();
    const currentPage = location.pathname;

    // 下拉選單
    const toggleMemberDropDown = () => dispatch(setMemberDropDownMenu(!memberDropDownMenu));
    const toggleAdminDropDown = () => dispatch(setAdminDropDownMenu(!adminDropDownMenu));
    return (
        <div className={`w-140 h-screen flex flex-col overflow-hidden duration-500 pt-4 border-r border-gray-900 border-solid whitespace-nowrap ${showSideBar ? '' : 'w-40'}`}>
            {/* {routes.privateRoutes.map(route => (
                    <Link key={route.path} to={route.path}>
                        <div key={route.name} className={ currentPage === route.path ? 'active' : null }>
                            {route.name}
                        </div>
                    </Link>
                ))} */}

            {/* <Collapse defaultActiveKey={['1']} ghost>
                <Panel header="個人資訊管理" key="1">
                    <Link to="/account/profile-setting">
                        <div className={currentPage === '/account/profile-setting' ? 'active' : ''}>帳戶設定</div>
                    </Link>
                </Panel>
                <Panel header="會員管理" key="2">
                    <Link to="/memberlist">
                        <div className={currentPage === '/memberlist' ? 'active' : ''}>列表式</div>
                    </Link>
                    <Link to="/membergrid">
                        <div className={currentPage === '/membergrid' ? 'active' : ''}>表格式</div>
                    </Link>
                </Panel>
            </Collapse> */}

            <div className="toggle_list">
                <div className="border-b border-gray-900 border-solid p-2">
                    <div className="title">
                        <img src={UserSvg} />
                        <span onClick={toggleMemberDropDown}>個人資訊管理</span>
                    </div>
                    <div className={`duration-500 overflow-hidden pl-7 h-7 ${memberDropDownMenu ? '' : 'h-0'}`}>
                        <Link to="/account/profile-setting">
                            <div className={currentPage === '/account/profile-setting' ? 'active' : ''}>帳戶設定</div>
                        </Link>
                    </div>
                </div>
                {state.role == 'ADMIN' &&
                    <div className="p-2">
                        <div className="title">
                            <img src={AdminSvg} />
                            <span onClick={toggleAdminDropDown}>會員管理</span>
                        </div>
                        <div className={`duration-500 overflow-hidden pl-7 h-14 ${adminDropDownMenu ? '' : 'h-0'}`}>
                            <Link to="/memberlist">
                                <div className={currentPage === '/memberlist' ? 'active' : ''}>列表式</div>
                            </Link>
                            <Link to="/membergrid">
                                <div className={currentPage === '/membergrid' ? 'active' : ''}>表格式</div>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default SideBar;