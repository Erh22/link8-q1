
// 把Action的名稱 提出來避免使用時打錯也方便管理跟閱讀
const types = {
    SET_USER_DATA: 'SET_USER_DATA',
    SET_TOKEN: 'SET_TOKEN',
    SET_SIDE_BAR: 'SET_SIDE_BAR',
    SET_IS_LOGIN: 'SET_IS_LOGIN',
    SET_MEMBER_DROP_DOWN_MENU: 'SET_MEMBER_DROP_DOWN_MENU',
    SET_ADMIN_DROP_DOWN_MENU: 'SET_ADMIN_DROP_DOWN_MENU',
    SET_MEMBER_LIST: 'SET_MEMBER_LIST'
}

// 初始值
const defaultState = {
    username: 'guest@mail.com',
    name: '',
    role: '',
    imgLink: '',
    token: null,
    showSideBar: true,
    isLogin: false,
    memberDropDownMenu: false,
    adminDropDownMenu: false,
    content:[],
    total:5
}
// 當前登入的使用者資料
export const setUserData = userData => ({
    type: types.SET_USER_DATA,
    userData
});

// token設置
export const setToken = token => ({
    type: types.SET_TOKEN,
    token
});

// 側邊欄顯示
export const setShowSideBar = showSideBar => ({
    type: types.SET_SIDE_BAR,
    showSideBar
});

// 是否登入
export const setIsLogin = isLogin => ({
    type: types.SET_IS_LOGIN,
    isLogin
});

// 個人資訊管理下拉
export const setMemberDropDownMenu = memberDropDownMenu => ({
    type: types.SET_MEMBER_DROP_DOWN_MENU,
    memberDropDownMenu
})

// 會員管理下拉
export const setAdminDropDownMenu = adminDropDownMenu => ({
    type: types.SET_ADMIN_DROP_DOWN_MENU,
    adminDropDownMenu
})

// 取得會員列表
export const setMemberList = memberList => ({
    type: types.SET_MEMBER_LIST,
    memberList
})

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_USER_DATA: return { ...state, username: action.userData.username, role: action.userData.role, name: action.userData.name, imgLink: action.userData.imgLink }

        case types.SET_TOKEN: {
            return { ...state, token: action.token }
        }
        case types.SET_SIDE_BAR: {
            return { ...state, showSideBar: action.showSideBar }
        }
        case types.SET_IS_LOGIN: {
            return { ...state, isLogin: action.isLogin }
        }
        case types.SET_MEMBER_DROP_DOWN_MENU: {
            return { ...state, memberDropDownMenu: action.memberDropDownMenu }
        }
        case types.SET_ADMIN_DROP_DOWN_MENU: {
            return { ...state, adminDropDownMenu: action.adminDropDownMenu }
        }
        case types.SET_MEMBER_LIST: {
            return { ...state, total: action.memberList.total, content: action.memberList.content }
        }
        default:
            return state;
    }
};

export default reducer;