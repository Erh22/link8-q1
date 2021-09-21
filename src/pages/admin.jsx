import SideBar from '../components/SideBar';
import Header from '../components/Header';

const Admin = () => {
    return (
        <div className="member">
            <Header />
            <div className="tabBox">
                <SideBar />
                <div className="right_item">
                    <div>管理員才可訪問</div>
                </div>
            </div>
        </div>
    )
}

export default Admin;