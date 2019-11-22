import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are u?', likesCount: '8'},
                {id: 2, message: "It's my first post", likesCount: '13'}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Nastya', src: 'https://smart-lab.ru/uploads/images/03/28/53/2016/06/07/f59438.jpg'},
                {id: 2, name: 'Oleg', src: 'http://cdn01.ru/files/users/images/32/c4/32c4cb047498da9301d64986ee0a646b.jpeg'},
                {id: 3, name: 'Natasha', src: 'https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'What are u doing?'}
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Nastya', src: 'https://smart-lab.ru/uploads/images/03/28/53/2016/06/07/f59438.jpg'},
                {id: 2, name: 'Oleg', src: 'http://cdn01.ru/files/users/images/32/c4/32c4cb047498da9301d64986ee0a646b.jpeg'},
                {id: 3, name: 'Natasha', src: 'https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) { 
        this._callSubscriber = observer; 
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;