import { useEffect, useState, useCallback } from "react";
import '@/style.css'
import { useSelector, useDispatch } from 'react-redux';
import SideBar from '@components/SideBar';
import Header from '@components/Header';
import { setUserData } from '@store/reducer';
import { Link } from "react-router-dom";

const MemberList = () => {
    return <div className="member memberList w-full">
        <Header />
        <div className="tabBox w-full">
            <SideBar />
            <div className="flex flex-col p-6 w-11/12">
                <h1 className="text-2xl font-bold mb-4">會員管理(列表式)</h1>
                <ul className="w-full flex flex-col">
                    <li className="flex h-16 border-2 border-gray-900 border-solid rounded-lg mb-4 w-full items-center p-3">
                        <span className="mr-2">1.姓名 : xxx</span>|
                        <span className="mr-2 ml-2">帳號 : aa@aa.aa</span>|
                        <span className="ml-2">角色 : ADMIN</span>
                        <div className="float-right">
                        <Link to="/">詳情</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}
export default MemberList;