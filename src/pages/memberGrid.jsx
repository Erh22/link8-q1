import { useEffect, useState, useCallback } from "react";
import '@/style.css'
import { useSelector, useDispatch } from 'react-redux';
import SideBar from '@components/SideBar';
import Header from '@components/Header';
import { setUserData } from '@store/reducer';

const MemberGrid = () => {
    return <div className="member">
        <Header />
        <div className="tabBox">
            <SideBar />
            <div className="flex flex-col p-6">
                <h1 className="text-2xl font-bold">表格式</h1>
            </div>
        </div>
    </div>
}
export default MemberGrid;