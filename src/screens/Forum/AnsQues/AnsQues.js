import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {CustomButtom, Header, CustomPopUp} from '@components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {changeGlobalState} from '../../../redux/slices/forumSlice';
import {useAddAnswerMutation} from '../../../redux/service/forumService';

const AnsQues = ({navigation}) => {
  const dispatch = useDispatch();
  const nav = useNavigation();
  const [dbButton, setdbButton] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState(false);
  const [response, setResponse] = useState('');
  const quesData = useSelector(state => state.root?.forum?.questionData);
  const userData = useSelector(state => state.root?.auth?.user.result);
  const globalState = useSelector(state => state.root?.forum?.globalState);

  const [addAnswerMutation] = useAddAnswerMutation();

  let params = {
    _id: quesData._id,
    select_category: quesData.select_category,
    quetion: quesData.quetion,
    status: 'active',
    answerd: 'yes',
    answerd_by: userData.name,
    answer: response,
  };

  const openModal = async () => {
    try {
      const response = await addAnswerMutation(params);
      console.log('Response', response);
      if (response.data.status) {
        dispatch(changeGlobalState(!globalState));
        setIsVisible(true);
      }
    } catch (err) {
      console.log('ERROR==>', err);
    }
  };

  const closeModal = () => {
    setIsVisible(false);
    navigation.navigate('Details');
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <Header drawer={false} back={true} />
      <View style={styles.subContainer}>
        <Text style={styles.headingText}>
          Category: {quesData.select_category}
        </Text>
        <Text style={styles.subHeadingText}>{quesData.quetion}</Text>
        <View style={styles.inputContainer}>
          <View style={styles.txtInputContainer}>
            <Text style={styles.inputTxt}>Response</Text>
            <TextInput
              placeholder="Enter your response"
              placeholderTextColor="#00000045"
              multiline={true}
              style={styles.txtInput}
              onChangeText={text => setResponse(text)}
            />
          </View>
          <Text style={styles.helpTxt}>
            Please be polite while answering the question. Refer to community
            guidelines for more info.
          </Text>
          <CustomButtom
            title="Post"
            twoButton={dbButton}
            onPressCancel={handleCancel}
            onPress={openModal}
          />
        </View>
      </View>
      <CustomPopUp
        visible={isVisible}
        onPress={closeModal}
        buttonText="Continue"
        text="Thanks for joining the conversation with your answer. It adds value to the discussion.We'll review your answer shortly."
      />
    </View>
  );
};

export default AnsQues;
