import React from 'react';
import {updateMessageCreator, sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
   return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
    return {
      sendMessage: () => {
        dispatch(sendMessageCreator());
      },
      updateNewMessageBody:(text) => {
        dispatch(updateMessageCreator(text));
      }
    }
  }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;