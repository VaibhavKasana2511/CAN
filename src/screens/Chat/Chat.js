import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import styles from './styles';
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {Header} from '@components';
import {IMAGES} from '@assets/images';

const Chat = () => {
  const [newMessage, setNewMessage] = useState('');
  // const [messages, setMessages] = useState([
  //   {id: 1, sender: 'Me', message: 'Hi Nitika!', timestamp: '10:00 PM'},
  //   {id: 2, sender: 'Nikita', message: 'Hi John!', timestamp: '10:00 PM'},
  // ]);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          // avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderMessages = ({item}) => {
    const myMsg = item.sender === 'Me';
    return (
      <View style={[myMsg ? styles.myMsgContainer : styles.otherMsgContainer]}>
        <View
          style={[myMsg ? styles.myTxtContainer : styles.otherTxtContainer]}>
          <Text style={styles.message}>{item.message}</Text>
        </View>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    );
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

      {/* <View style={styles.subContainer}> */}
      {/* <FlatList
          data={messages}
          renderItem={renderMessages}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.chatContainer}
        /> */}

      <GiftedChat
        style={styles.subContainer}
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderSend={renderSend}
        textInputStyle={styles.txtInput}
        multiline={true}
      />

      {/* <View style={styles.inputContainer}>
          <TextInput
            multiline
            value={newMessage}
            style={styles.txtInput}
            onChangeText={setNewMessage}
            placeholder="Type your message"
          />

          <TouchableOpacity style={styles.sendBtn} onPress={handleSendMessage}>
            <Image source={IMAGES.sendButton} />
          </TouchableOpacity>
        </View> */}
      {/* </View> */}
    </View>
  );
};

export default Chat;
