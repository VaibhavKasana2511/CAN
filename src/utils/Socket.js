// import io from 'socket.io-client';
// import {SOCKET_CHAT} from '../constants/urls';
// import { connect } from 'formik';

// class Socket {
//   socket = null;
//   isConnected = false;

//   static socketInit(userId, dispatch) {
//     if (!socket) {
//       const socket = io.connect(SOCKET_CHAT, {
//         transports: ['websocket'],
//         reconnection: true,
//         reconnectionDelay: 1000,
//         reconnectionDelayMax: 5000,
//         reconnectionAttempts: 5,
//       });
//       this.socket.on(connect, res => {
//         this.isConnected = this.socket.connected;
//         console.log('this.socket', this.socket, res);
//       });

//       this.socket.on(SOCKET.DISCONNECT, res => {
//         console.log('disconnect', res);
//         this.isConnected = this.socket.connected;
//       });
//       this.socket.on(SOCKET.RECONNECT, e => {
//         console.log('reconnect', this.socket, e);
//         this.isConnected = this.socket.connected;
//       });

//       this.socket.on(SOCKET.NEW_MESSAGE_READ, sendMessageData => {
//         console.log('new-message-read', sendMessageData);
//         let data = [];
//         let newMassage = sendMessageData;
//         newMassage.text = sendMessageData.message;
//         if (userId === sendMessageData.senderID) {
//           newMassage.user = {_id: 1};
//         } else {
//           newMassage.user = {_id: 2};
//         }
//         data.push(newMassage);
//         dispatch({
//           type: ACTION_TYPE.ADD_CHAT_ITEM,
//           payload: data,
//         });
//       });
//     }
//   }

//   static joinRoom(roomData) {
//     this.socket.emit(SOCKET.JOIN, roomData);
//   }

//   static onSend(messageData) {
//     console.log('messageData', messageData);
//     this.socket.emit(SOCKET.NEW_MESSAGE, messageData);
//   }

//   static logoutUser() {
//     this.socket.disconnect();
//     this.socket = null;
//     this.isConnected = false;
//   }
// }

// export default Socket;

import io from 'socket.io-client';
import URL from './services/endpoints';
import SOCKET from '../constants/socket';

let socket = null;
let isConnected = false;

const socketInit = userId => {
  if (!socket) {
    socket = io.connect(URL.SOCKET_CHAT, {
      transports: ['websocket'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    });

    socket.on(SOCKET.CONNECT, res => {
      isConnected = socket.connected;
      console.log('socket connected', socket, res);
    });

    socket.on(SOCKET.DISCONNECT, res => {
      console.log('disconnect', res);
      isConnected = socket.connected;
    });

    socket.on(SOCKET.RECONNECT, e => {
      console.log('reconnect', socket, e);
      isConnected = socket.connected;
    });

    socket.on(SOCKET.NEW_MESSAGE_READ, sendMessageData => {
      console.log('new-message-read', sendMessageData);
      let data = [];
      let newMassage = sendMessageData;
      newMassage.text = sendMessageData.message;
      if (userId === sendMessageData.senderID) {
        newMassage.user = {_id: 1};
      } else {
        newMassage.user = {_id: 2};
      }
      data.push(newMassage);
    });
  }
};

const joinRoom = roomData => {
  socket.emit(SOCKET.JOIN, roomData);
};

const onSend = messageData => {
  console.log('messageData', messageData);
  socket.emit(SOCKET.NEW_MESSAGE, messageData);
};

const socketDisconnect = () => {
  socket.disconnect();
  socket = null;
  isConnected = false;
};

export {socketInit, joinRoom, onSend, socketDisconnect};
