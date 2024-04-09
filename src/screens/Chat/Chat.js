import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  forwardRef,
} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import styles from './styles';
import {View, TouchableOpacity, Text, Image, Modal} from 'react-native';
import {Header} from '@components';
import {IMAGES} from '@assets/images';
import {useLazyFetchChatListQuery} from '../../redux/service/chatService';
import {useSelector} from 'react-redux';
import SOCKET from '../../constants/socket';
import {eventSend} from '../../utils/Socket';
import LoadingScreen from '../../components/common/loader/LoadingScreen';

const Chat = forwardRef((props, ref) => {
  const [reRender, setReRender] = useState(true);
  const [messages, setMessages] = useState([]);
  const roomID = useSelector(state => state.root?.chat?.roomId);
  console.log('roomiDDDDD==>', roomID);
  const userData = useSelector(state => state.root?.auth?.user?.result);
  console.log('userDATA', userData);
  const [data, isLoading] = useLazyFetchChatListQuery();

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await data();
        const result = response.data?.result.docs;
        console.log('R==>', result);
        const formattedMessages = result.map(message => ({
          _id: message._id,
          text: message.message, // Assuming "message" contains the text of the message
          createdAt: new Date(message.createdAt),
          user: {
            _id: message.senderID, // Assuming senderID uniquely identifies the user
          },
        }));
        formattedMessages.sort((a, b) => b.createdAt - a.createdAt);
        console.log('Formatted Message', formattedMessages);
        setMessages(formattedMessages);
      } catch (err) {
        console.log('ERROR', err);
      }
    };
    fetchChat();
  }, [reRender]);

  const currentUserID = userData._id;
  const currentUserMessages = messages.filter(
    message => message.user._id === currentUserID,
  );
  const otherUserMessages = messages.filter(
    message => message.user._id !== currentUserID,
  );

  const renderMessage = (message, previousMessage) => {
    // Customize the message bubble appearance based on sender's ID
    const text = message.currentMessage;
    const isFirstMessageOfTheDay =
      !previousMessage ||
      !isSameDay(new Date(previousMessage.createdAt), new Date(createdAt));

    if (text.user._id === currentUserID) {
      return (
        <View>
          {isFirstMessageOfTheDay && (
            <Text style={styles.dateStamp}>
              {formatDatestamp(text.createdAt)}
            </Text>
          )}
          {/* <Text>{formatDatestamp(text.createdAt)}</Text> */}
          <View style={styles.myTxtContainer}>
            <Text style={styles.myMsgContainer}>{text.text}</Text>
          </View>
          <Text style={styles.rightTimestamp}>
            {formatTimestamp(text.createdAt)}
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.otherTxtContainer}>
            <Text style={styles.otherMsgContainer}>{text.text}</Text>
          </View>
          <Text style={styles.leftTimestamp}>
            {formatTimestamp(text.createdAt)}
          </Text>
        </View>

        // <View style={styles.otherTxtContainer}>
        //   {isFirstMessageOfTheDay && (
        //     <Text style={styles.dateStamp}>
        //       {formatDatestamp(text.createdAt)}
        //     </Text>
        //   )}
        //   <Text style={styles.otherMsgContainer}>{text.text}</Text>
        //   <Text style={styles.timestamp}>
        //     {formatTimestamp(text.createdAt)}
        //   </Text>
        // </View>
      );
    }
  };

  const formatTimestamp = createdAt => {
    const date = new Date(createdAt);
    const formattedDate = `${
      (date.getHours() < 10 ? '0' : '') + date.getHours()
    }:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}`;
    return formattedDate;
  };

  const formatDatestamp = createdAt => {
    // Convert createdAt to a Date object
    const date = new Date(createdAt);
    // Format the date as desired (example format: "HH:MM, DD/MM/YYYY")
    const formattedDate = `${
      (date.getDate() < 10 ? '0' : '') + date.getDate()
    }/${
      (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1)
    }/${date.getFullYear()}`;
    return formattedDate;
  };

  const onSend = (sendMessageData = []) => {
    // let messageData = {
    //   name: userData.name,
    //   roomId: '64b11985c17464d7248b9d0d',
    //   // senderID: userData._id,
    //   senderID: '640326ae44ba566c800536db',
    //   // receiverID: SOCKET.RECEIVER_ID,
    //   receiverID: '63b3dfde551232a1bb5420d7',
    //   message: sendMessageData[0].text,
    // };
    let messageData = {
      // name: userData.name,
      roomId: '66147289f34e06d190b5cc03',
      senderID: userData._id,
      receiverID: '63b3dfde551232a1bb5420d7',
      message: sendMessageData[0].text,
      receiverIDinvestor: [userData],
    };
    sendMessageData[0].createdAt = new Date().toJSON();
    eventSend(messageData);
  };

  const renderSend = props => {
    return (
      <TouchableOpacity
        style={styles.sendBtn}
        onPress={() =>
          props.onSend({text: props.text.trim()}, true, setReRender(!reRender))
        }>
        <Image source={IMAGES.sendButton} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header text="CAN Admin" image={false} />
      <GiftedChat
        messages={messages}
        renderMessage={renderMessage}
        onSend={messages => onSend(messages)}
        // user={{
        //   _id: 1,
        // }}
        user={{
          _id: userData._id,
        }}
        renderSend={renderSend}
        renderAvatar={() => null}
        textInputProps={styles.txtInput}
        multiline={true}
      />
      <Modal
        visible={isLoading.isLoading}
        transparent={true}
        animationType="fade">
        <LoadingScreen />
      </Modal>
    </View>
  );
});

export default Chat;
