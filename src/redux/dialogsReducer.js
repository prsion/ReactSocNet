const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs:[
    {id:1, name:'Dimuch'},
    {id:2, name:'Andrey'},
    {id:3, name:'Lucie'},
    {id:4, name:'Sveta'},
    {id:5, name:'Sasha'}
  ],
  messages:[
    {id:1, message:'Hi HI '},
    {id:2, message:'OOOOohohoho'},
    {id:3, message:'egegegeggey'},
    {id:4, message:'wwwaaaauuu'},
    {id:5, message:'"euuuuuuuuu'}
  ],
  newMessageText : ''
}

const dialogsReducer = (state = initialState, action) => {

  switch(action.type){
    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText:action.newMessage,
      }

    case SEND_MESSAGE:
      let newMessage=state.newMessageText;
      return {
        ...state,
        newMessageText:'',
        messages: [...state.messages, {id:6, message:newMessage}]
      }

    default: return state;
    }
  }

export const updateMessageCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newMessage: text});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;