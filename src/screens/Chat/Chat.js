import React, {useState} from 'react';
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
  const [messages, setMessages] = useState([
    {id: 1, sender: 'Me', message: 'Hi Nitika!', timestamp: '10:00 PM'},
    {id: 2, sender: 'Nikita', message: 'Hi John!', timestamp: '10:00 PM'},
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return; // Don't send empty messages
    const newId = messages.length + 1;
    const timestamp = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const newMessageObj = {
      id: newId,
      sender: 'Me',
      message: newMessage,
      timestamp,
    };
    setMessages([...messages, newMessageObj]);
    setNewMessage('');
  };

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

  return (
    <View style={styles.mainContainer}>
      <Header text="CAN Admin" image={false} />

      <View style={styles.subContainer}>
        <FlatList
          data={messages}
          renderItem={renderMessages}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.chatContainer}
        />

        <View style={styles.inputContainer}>
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
        </View>
      </View>
    </View>
  );
};

export default Chat;
