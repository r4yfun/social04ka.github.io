import React from 'react';
import s from './Dialogs.module.scss';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogsItem name={d.name} id={d.id} src={d.src} key={d.id} />)
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> )
    let newMessageText = state.newMessageText;

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let newText = e.target.value;
        props.updateNewMessageText(newText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div className={s.messagesList}>
                    { messagesElements }
                </div>
                <div className={s.newMessageBlock}>
                    <textarea value={newMessageText} 
                              onChange={onMessageChange} 
                              placeholder='Enter message' 
                    />
                    <button className="btn" onClick={ sendMessage } >
                        addMessage
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;