import React, {useState} from 'react';
import styles from './styles';
import {Text, View, TextInput} from 'react-native';
import {Header, CustomButtom} from '@components';

const HaveQuestions = ({navigation}) => {
  const [dbButton, setdbButton] = useState(true);

  const handleCancel = () => {
    console.log('first');
  };

  const handlePost = () => {
    console.log('firstQuestion');
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.subContainer}>
        <Text style={styles.quesTxt}>Have Questions</Text>

        <View style={styles.inputContainer}>
          <View style={styles.txtInputContainer}>
            <Text style={styles.inputTxt}>Category</Text>
            <TextInput
              placeholder="Enter your current password"
              style={styles.txtInput}
            />
          </View>
          <View style={styles.txtInputContainer}>
            <Text style={styles.inputTxt}>Questions</Text>
            <TextInput
              placeholder="Type your questions"
              style={styles.txtInput}
            />
          </View>
          <Text style={styles.helpTxt}>
            If you have already asked similar question in the past please wait
            for others to send in their response instead of asking it again.
          </Text>
        </View>
        <CustomButtom
          title="Post"
          twoButton={dbButton}
          // onPress={openModal}
        />
      </View>
    </View>
  );
};

export default HaveQuestions;
