import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import '@/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin ,setUserData} from '../store/reducer';
import { setToken } from '@store/reducer';

const getLogin = (username, password) => fetch('https://l8-upgrade-apis.vercel.app/api/login', {
    method: 'post',
    body: JSON.stringify({ username: username, password: password }),
    headers: new Headers({
        'Content-Type': 'application/json',
    })
})

function Login() {
    const dispatch = useDispatch();
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const isLogin = useSelector((state) => state.isLogin)

    // 測試token
    const state = useSelector((state)=>state)

    const editUsername = (e) => {
        setUsername(e.target.value);
    }
    const editPassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = async () => {
        const jsonData = await getLogin(username, password)
        const res = await jsonData.json()
        if (res.success) {
            localStorage.setItem('Authorization', res.token);
            dispatch(setToken(res.token));

            // 測試token
            console.log('login token',state.token)
            dispatch(setUserData(res.data));
            dispatch(setIsLogin(true))
            history.push('/')
        } else {
            alert(res.message)
        }
    }
    return (
        <div className="box login_box">
            <div className="content">
                <h1 className="text-2xl font-bold">登入</h1>
                <div>
                    <div className="input_box input_box_account">
                        <span>帳號</span><input type="text" value={username} onChange={editUsername} className="border border-gray-900 border-solid rounded-sm"></input>
                    </div>
                    <div className="input_box input_box_password">
                        <span>密碼</span><input type="password" value={password} onChange={editPassword} className="border border-gray-900 border-solid rounded-sm"></input>
                    </div>
                </div>
                <button className="w-1/2 h-8 mt-5 rounded-md bg-blue-500 text-white" onClick={() => handleLogin()}>登入</button>
                <Link to="/register">去註冊</Link>
            </div>
        </div>
    )
}
export default Login;