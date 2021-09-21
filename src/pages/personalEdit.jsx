import { useEffect, useState, useCallback } from "react";
import '@/style.css'
import { useSelector, useDispatch } from 'react-redux';
import SideBar from '@components/SideBar';
import Header from '@components/Header';
import { setUserData } from '@store/reducer';

function PersonalEdit() {
    const state = useSelector((state) => state)
    const token = useSelector((state) => state.token)
    const [uploadImg, setUploadImg] = useState('')
    const dispatch = useDispatch();
    const handleChooseImg = (e) => {
        let photo = e.target.files[0]
        setUploadImg(photo)
        console.log('uploadImg', uploadImg)
        // setImgPath(URL.createObjectURL(e.target.files[0]))
    }
    const handleUploadImg = () => {
        const formData = new FormData()
        formData.append('type', uploadImg.type)
        formData.append('image', uploadImg)
        formData.append('name', uploadImg.name)
        console.log('formData', formData)
        fetch('https://l8-upgrade-apis.vercel.app/api/users/uploadPicture', {
            method: 'post',
            body: formData,
            headers: new Headers({
                'Authorization': 'Bearer ' + token
            })
        }).then((res) => {
            return res.json()
        }).then((res) => {
            dispatch(setUserData({ ...state, imgLink: res.data }))
        }).catch((error) => {
            console.log('Error:', error)
        })
    }

    return (
        <div className="member">
            <Header />
            <div className="tabBox">
                <SideBar />
                <div className="right_item">
                    <h1>帳戶設定</h1>
                    <div className="imgBox">
                        <img src={state.imgLink}></img>
                    </div>
                    <div>
                        <span>{state.name}</span><span>({state.username})</span>
                    </div>
                    <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" multiple onChange={handleChooseImg} />
                    <button className="upLoadBtn" onClick={handleUploadImg}>上傳圖片</button>
                </div>
            </div>
        </div>
    )
}

export default PersonalEdit;