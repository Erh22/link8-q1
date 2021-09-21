
// 把Action的名稱 提出來避免使用時打錯也方便管理跟閱讀
const types = {
    SET_USER_DATA: 'SET_USER_DATA',
    SET_TOKEN: 'SET_TOKEN',
    SET_SIDE_BAR: 'SET_SIDE_BAR',
    SET_IS_LOGIN:'SET_IS_LOGIN',
}

// 初始值
const defaultState = {
    username: 'guest@mail.com',
    name: '',
    role: '',
    imgLink: '',
    token: null,
    showSideBar: true,
    isLogin:false
}

export const setUserData = userData => ({
    type: types.SET_USER_DATA,
    userData
});

export const setToken = token => ({
    type: types.SET_TOKEN,
    token
});

export const setShowSideBar = showSideBar => ({
    type: types.SET_SIDE_BAR,
    showSideBar
});

export const setIsLogin = isLogin => ({
    type: types.SET_IS_LOGIN,
    isLogin
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_USER_DATA: return { ...state, username: action.userData.username, role: action.userData.role, name: action.userData.name,imgLink:action.userData.imgLink }
        
        case types.SET_TOKEN: {
            return { ...state, token: action.token }
        }
        case types.SET_SIDE_BAR: {
            return { ...state, showSideBar: action.showSideBar }
        }
        case types.SET_IS_LOGIN: {
            return { ...state, isLogin: action.isLogin }
        }
        default:
            return state;
    }
};

export default reducer;