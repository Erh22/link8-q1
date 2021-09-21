import Hamburger from "@image/hamburger.svg";
import Notice from '@image/notice.svg'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { setShowSideBar ,setIsLogin} from '../store/reducer';

const Header = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const showSideBar = useSelector((state) => state.showSideBar)
    const toggleSideBar = () => dispatch(setShowSideBar(!showSideBar));
    
    //登出清空localStorage
    const handleSignOut = () =>{
        localStorage.clear()
        dispatch(setIsLogin(false))
    }

    return (
        <div className="header">
            <div className="left">
                <div className="logo">LOGO</div>
                <div className="icon-hamburger" onClick={toggleSideBar}>
                    <img src={Hamburger} />
                </div>
            </div>
            <div className="loginPanel">
                <img className="notice" src={Notice}/>
                <div className="photo">
                    <img src={state.imgLink}></img>
                </div>
                <span>{state.name}</span>
                <span>({state.username})</span>
                <Link to='/login' onClick={handleSignOut}>登出</Link>
            </div>
        </div>
    )
}

export default Header;