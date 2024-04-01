// import React, {useState, useCallback, useEffect} from 'react';
// import {GiftedChat} from 'react-native-gifted-chat';
// import styles from './styles';
// import {View, TouchableOpacity, Text, Image} from 'react-native';
// import {Header} from '@components';
// import {IMAGES} from '@assets/images';
// import {useLazyFetchChatListQuery} from '../../redux/service/chatService';
// import {useSelector} from 'react-redux';
// import SOCKET from '../../constants/socket';
// import {eventSend} from '../../utils/Socket';

// const Chat = () => {
//   const [newMessage, setNewMessage] = useState('');
//   // const [messages, setMessages] = useState([
//   //   {id: 1, sender: 'Me', message: 'Hi Nitika!', timestamp: '10:00 PM'},
//   //   {id: 2, sender: 'Nikita', message: 'Hi John!', timestamp: '10:00 PM'},
//   // ]);

//   const [messages, setMessages] = useState([]);
//   const roomID = useSelector(state => state.root?.chat?.roomId);
//   const userData = useSelector(state => state.root?.auth?.user?.result);
//   console.log('userDta', userData);
//   console.log(roomID);
//   const [data] = useLazyFetchChatListQuery();

//   useEffect(() => {
//     const fetchChat = async () => {
//       try {
//         const response = await data(roomID);
//         const result = response.data.result;
//         console.log('R==>', result);
//         setMessages(result.docs);
//       } catch (err) {
//         console.log('ERROR', err);
//       }
//     };
//     fetchChat();
//   }, []);

//   // useEffect(() => {
//   //   setMessages([
//   //     {
//   //       _id: 1,
//   //       text: 'Hello developer',
//   //       createdAt: new Date(),
//   //       user: {
//   //         _id: 2,
//   //         name: 'React Native',
//   //         // avatar: 'https://placeimg.com/140/140/any',i
//   //       },
//   //     },
//   //   ]);
//   // }, []);

//   // const onSend = useCallback((sendMessageData = []) => {
//   //   let messageData = {
//   //     roomId: roomID,
//   //     senderID: userData._id,
//   //     receiverID: SOCKET.RECEIVER_ID,
//   //     message: sendMessageData[0].text,
//   //   };
//   //   sendMessageData[0].createdAt = new Date().toJSON();
//   //   eventSend(messageData);
//   //   setTimeout(() => {
//   //     giftedChatRef.current.scrollToBottom();
//   //   }, 500);
//   // }, []);

//   const onSend = useCallback(
//     (sendMessageData = []) => {
//       let messageData = {
//         roomId: roomID,
//         senderID: userData._id,
//         receiverID: SOCKET.RECEIVER_ID,
//         message: sendMessageData[0].text,
//       };
//       sendMessageData[0].createdAt = new Date().toJSON();
//       eventSend(messageData);
//       setTimeout(() => {
//         if (giftedChatRef.current) {
//           giftedChatRef.current.scrollToBottom();
//         }
//       }, 500);
//     },
//     [giftedChatRef, roomID, userData._id, eventSend],
//   );

//   const renderSend = props => {
//     return (
//       <TouchableOpacity
//         style={styles.sendBtn}
//         onPress={() => props.onSend({text: props.text.trim()}, true)}>
//         <Image source={IMAGES.sendButton} />
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.mainContainer}>
//       <Header text="CAN Admin" image={false} />

//       {/* <View style={styles.subContainer}> */}
//       {/* <FlatList
//           data={messages}
//           renderItem={renderMessages}
//           keyExtractor={item => item.id.toString()}
//           contentContainerStyle={styles.chatContainer}
//         /> */}

//       <GiftedChat
//         style={styles.subContainer}
//         messages={messages}
//         onSend={messages => onSend(messages)}
//         user={{
//           _id: 1,
//         }}
//         renderSend={renderSend}
//         textInputStyle={styles.txtInput}
//         multiline={true}
//       />

//       {/* <View style={styles.inputContainer}>
//           <TextInput
//             multiline
//             value={newMessage}
//             style={styles.txtInput}
//             onChangeText={setNewMessage}
//             placeholder="Type your message"
//           />

//           <TouchableOpacity style={styles.sendBtn} onPress={handleSendMessage}>
//             <Image source={IMAGES.sendButton} />
//           </TouchableOpacity>
//         </View> */}
//       {/* </View> */}
//     </View>
//   );
// };

// export default Chat;

import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  forwardRef,
} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import styles from './styles';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {Header} from '@components';
import {IMAGES} from '@assets/images';
import {useLazyFetchChatListQuery} from '../../redux/service/chatService';
import {useSelector} from 'react-redux';
import SOCKET from '../../constants/socket';
import {eventSend} from '../../utils/Socket';

const Chat = forwardRef((props, ref) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const roomID = useSelector(state => state.root?.chat?.roomId);
  const userData = useSelector(state => state.root?.auth?.user?.result);
  const [data] = useLazyFetchChatListQuery();
  const giftedChatRef = useRef(null);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await data();
        const result = response.data.result;
        console.log('R==>', result);
        const formattedMessages = result.map(message => ({
          _id: message._id,
          text: message.message,
          createdAt: new Date(message.createdAt),
          user: {
            _id: message.senderID, // Assuming senderID is unique for each user
          },
        }));
        setMessages(formattedMessages);
      } catch (err) {
        console.log('ERROR', err);
      }
    };
    fetchChat();
  }, []);

  const onSend = (sendMessageData = []) => {
    let messageData = {
      roomId: roomID,
      senderID: userData._id,
      // receiverID: SOCKET.RECEIVER_ID,
      receiverID: '63b3dfde551232a1bb5420d7',
      message: sendMessageData[0].text,
    };
    sendMessageData[0].createdAt = new Date().toJSON();
    eventSend(messageData);
    // Remove the state update from here
    // setTimeout(() => {
    //   giftedChatRef.current.scrollToBottom();
    // }, 500);
  };

  const renderSend = props => {
    return (
      <TouchableOpacity
        style={styles.sendBtn}
        onPress={() => props.onSend({text: props.text.trim()}, true)}>
        <Image source={IMAGES.sendButton} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header text="CAN Admin" image={false} />
      <GiftedChat
        // ref={ref} // Forward ref to GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 2,
        }}
        renderSend={renderSend}
        renderAvatar={() => null}
        textInputStyle={styles.txtInput}
        multiline={true}
      />
    </View>
  );
});

export default Chat;
