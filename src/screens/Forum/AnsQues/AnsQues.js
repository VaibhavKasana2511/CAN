import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {CustomButtom, Header, CustomPopUp} from '@components';
import {useNavigation} from '@react-navigation/native';

const AnsQues = ({navigation}) => {
  const nav = useNavigation();
  const [dbButton, setdbButton] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
    navigation.navigate('Details');
  };

  const handleCancel = () => {
    console.log('first');
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <Header drawer={false} back={true} />

      <View style={styles.subContainer}>
        <Text style={styles.headingText}>Category: Valuations & MRR</Text>

        <Text style={styles.subHeadingText}>What exactly is MRR?</Text>

        <View style={styles.inputContainer}>
          <View style={styles.txtInputContainer}>
            <Text style={styles.inputTxt}>Response</Text>
            <TextInput
              placeholder="Enter your response"
              placeholderTextColor="#00000045"
              multiline={true}
              style={styles.txtInput}
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
