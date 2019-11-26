import React from 'react';
import { sendMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (newText) => {
            dispatch(onMessageChangeActionCreator(newText));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

let AuthRedirectComponents = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponents);

export default DialogsContainer;