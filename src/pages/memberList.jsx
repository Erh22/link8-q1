import { useEffect, useState, useCallback } from "react";
import '@/style.css'
import { useSelector, useDispatch } from 'react-redux';
import SideBar from '@components/SideBar';
import Header from '@components/Header';
import { setUserData } from '@store/reducer';

const MemberList = () => {
    return <div className="member memberList w-full">
        <Header />
        <div className="tabBox w-full">
            <SideBar />
            <div className="flex flex-col pl-8">
                <h1>會員管理(列表式)</h1>
                <ul className="w-11/12 flex">
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
}
export default MemberList;