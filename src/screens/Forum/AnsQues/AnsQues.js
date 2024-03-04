import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {CustomButtom, Header} from '@components';

const AnsQues = ({navigation}) => {
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
          <CustomButtom title="Post" twoButton={dbButton} />
        </View>
      </View>
    </View>
  );
};

export default AnsQues;
