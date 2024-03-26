import React, {useState, useEffect} from 'react';
import styles from './styles';
import {Text, View, TextInput} from 'react-native';
import {Header, CustomButtom} from '@components';
import {Dropdown} from 'react-native-element-dropdown';
import {useAddQuestionMutation} from '../../../redux/service/authService';
import {useSelector} from 'react-redux';

const HaveQuestions = ({navigation}) => {
  const [dbButton, setdbButton] = useState(true);
  const [question, setQuestion] = useState('');
  const allCategories = useSelector(state => state.root?.forum.forumCategories);
  const categoryData = useSelector(state => state.root?.forum.category);
  const userData = useSelector(state => state.root?.auth.user.result);
  const [addQuestionMutation] = useAddQuestionMutation();
  const [selectedCategory, setSelectedCategory] = useState(
    categoryData.category_name,
  );

  let params = {
    category_id: categoryData._id,
    select_category: selectedCategory,
    quetion: question,
    status: 'active',
    answerd: 'no',
    answerd_by: userData.name,
  };

  const handlePost = async () => {
    console.log('PARAMS==>', params);
    try {
      const response = await addQuestionMutation(params);
      console.log('Response', response);
      if (response.data.status) {
        navigation.navigate('Details');
      }
    } catch (err) {
      console.log('ERROR==>', err);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header drawer={false} back={true} />
      <View style={styles.subContainer}>
        <Text style={styles.quesTxt}>Have Questions</Text>

        <View style={styles.inputContainer}>
          <View style={styles.txtInputContainer}>
            <Text style={styles.inputTxt}>Category</Text>
            <Dropdown
              data={allCategories}
              labelField="category_name"
              valueField="_id"
              onChange={item => setSelectedCategory(item)}
              placeholder={categoryData.category_name}
              style={styles.dropDown}
              value={categoryData.category_name}
            />
          </View>
          <View style={styles.txtInputContainer}>
            <Text style={styles.inputTxt}>Questions</Text>
            <TextInput
              placeholder="Type your questions"
              style={styles.txtInput}
              onChangeText={text => setQuestion(text)}
            />
          </View>
          <Text style={styles.helpTxt}>
            If you have already asked similar question in the past please wait
            for others to send in their response instead of asking it again.
          </Text>
        </View>
        <CustomButtom
          onPressCancel={() => navigation.goBack()}
          title="Post"
          twoButton={dbButton}
          onPress={handlePost}
        />
      </View>
    </View>
  );
};

export default HaveQuestions;
