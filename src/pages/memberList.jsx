import { useEffect, useState, useCallback } from "react";
import '@/style.css'
import { useSelector, useDispatch } from 'react-redux';
import SideBar from '@components/SideBar';
import Header from '@components/Header';
import { setMemberList } from '@store/reducer';
import { Link } from "react-router-dom";
const getMemberListTotal = (token) => fetch('https://l8-upgrade-apis.vercel.app/api/users', {
    method: 'get',
    headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    })
})
const getMemberList = (token, totalRes) => fetch(`https://l8-upgrade-apis.vercel.app/api/users?page=0&size=${totalRes.data.total}`, {
    method: 'get',
    headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    })
})

const MemberList = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const token = useSelector((state) => state.token)
    const total = useSelector((state) => state.total)
    // const token = localStorage.getItem('Authorization');

    useEffect(() => {
        console.log('token', token)
        if (token) {
            const loadList = async () => {
                const totalJsonData = await getMemberListTotal(token);
                const totalRes = await totalJsonData.json();

                const listJsonData = await getMemberList(token, totalRes)
                const listRes = await listJsonData.json()
                if (listRes.success) {
                    dispatch(setMemberList({ ...state, content: listRes.data.content, total: listRes.data.total }))
                } else {
                    console.log(listRes.message)
                }
            };
            loadList()
        }
    }, [])
    return <div className="member memberList w-full">
        <Header />
        <div className="tabBox w-full">
            <SideBar />
            <div className="flex flex-col p-6 w-11/12">
                <h1 className="text-2xl font-bold mb-4">會員管理(列表式){total}</h1>
                <ul className="w-full flex flex-col">
                    {state.content && state.content.map((content) => (
                        <li key={content._id} className="flex h-16 border-2 border-gray-900 border-solid rounded-lg mb-4 w-full items-center p-3 relative">
                            <span className="mr-2">1.姓名 : {content.name || '尚未編輯姓名'}</span>|
                            <span className="mr-2 ml-2">帳號 : {content.username}</span>|
                            <span className="ml-2">角色 : {content.role}</span>
                            <div className="absolute right-8">
                                <Link to="/">詳情</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
}
export default MemberList;