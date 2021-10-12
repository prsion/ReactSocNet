import React from 'react';
import {updateMessageCreator, sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
   return {
    dialogsPage: state.dialogsPage,
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

 export default compose(
      connect(mapStateToProps, mapDispatchToProps),
      withAuthRedirect
  )
  (Dialogs);
/*
let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;*/
