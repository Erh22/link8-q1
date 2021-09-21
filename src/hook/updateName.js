import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setUserData } from '@store/reducer';

const updateName = (token,editName) => fetch('https://l8-upgrade-apis.vercel.app/api/users/updateName', {
    method: 'put',
    body: JSON.stringify({ name: editName }),
    headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    })
})
const getNewName = (token,state) => fetch(`https://l8-upgrade-apis.vercel.app/api/users/${state.username}`,{
    method:'get',
    headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    })
})

const userNameData = () => {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const state = useSelector((state) => state)
    const token = useSelector((state) => state.token)

    const [editName, setEditName] = useState('')
    const showModal = () => {
        setIsModalVisible(true);
        setEditName(state.name)
        console.log('show editName', editName)
    };

    useEffect(() => {
        console.log('state.name', state.name)
        if (!state.name) {
            setIsModalVisible(true)
        } else {
            setIsModalVisible(false)
        }
    }, [])

    const handleOk = async () => {
        // 修改姓名請求
        const jsonData = await updateName(token,editName)
        const res = await jsonData.json();

        // 取得最使用者資料
        const newData = await getNewName(token,state)
        const newRes = await newData.json()

        // 修改姓名請求成功，即更新姓名資料
        if (res.success) {
            dispatch(setUserData({ ...state, name: newRes.data.name }))
            console.log('newRes',newRes)
            setIsModalVisible(false);
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleChangeName = (e) => {
        setEditName(e.target.value)
    }

    return{editName,handleOk,isModalVisible,handleCancel,handleChangeName}
}

export default userNameData;