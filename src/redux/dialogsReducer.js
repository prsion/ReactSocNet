const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

 if (action.type === UPDATE_MESSAGE_TEXT){
    state.newMessageText=action.newMessage;

  }
  else if (action.type === SEND_MESSAGE){
    let newMessage = state.newMessageText;
    state.newMessageText= '';
    state.messages.push({id:6, message:newMessage});
  }

  return state;

}

export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newMessage: text});
export const sendMessageBodyActionCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;