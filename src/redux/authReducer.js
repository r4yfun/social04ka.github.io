import { authAPI } from "../API/API";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_AUTH_DATA: 
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserAuthData = (userId, email, login) => ({type: SET_USER_AUTH_DATA, data: {userId, email, login} })

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0 ) {
                    let {id, email, login} = response.data.data
                    dispatch(setUserAuthData(id, email, login))
                }
            })
}


export default authReducer;