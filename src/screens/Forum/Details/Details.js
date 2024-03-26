import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {Header} from '@components';
import {useDispatch, useSelector} from 'react-redux';
import {useLazyCategoryQuestionQuery} from '../../../redux/service/authService';
import {fetchQuestionData} from '../../../redux/slices/forumSlice';

const Details = ({navigation}) => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.root.forum.category);
  console.log('STATE==>', userState);
  const [data] = useLazyCategoryQuestionQuery();
  const [detailData, setDetailData] = useState([]);

  const fetchQuestion = async () => {
    try {
      const res = await data(userState._id);
      const response = res.data.result;
      setDetailData(response);
      console.log('QUESTION===>', response);
    } catch (err) {
      console.log('Error===>', err);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, [userState]);

  const addAnswer = item => {
    console.log('ITEM@#$%==>', item);
    dispatch(fetchQuestionData(item));
    navigation.navigate('AnsQues');
  };

  const addQues = () => {
    navigation.navigate('HaveQuestions');
  };

  const renderdetailData = ({item}) =>
    item.answerd === 'yes' ? (
      <View style={styles.dataContainer}>
        <Text style={styles.ques}>{item.quetion}</Text>
        <Text style={styles.ans}>{item.answer}</Text>
      </View>
    ) : (
      <TouchableOpacity
        onPress={() => addAnswer(item)}
        style={styles.dataContainer}>
        <Text style={styles.ques}>{item.quetion}</Text>
        <TouchableOpacity onPress={() => addAnswer(item)}>
          <Text style={styles.addAns}>Add an answer</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );

  return (
    <View style={styles.mainContainer}>
      <Header back={true} drawer={false} />
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.heading}>{userState.category_name}</Text>
          <TouchableOpacity></TouchableOpacity>
        </View>
        <View style={styles.forumDataList}>
          <FlatList
            data={detailData}
            renderItem={renderdetailData}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <TouchableOpacity onPress={addQues} style={styles.queryContainer}>
          <Text style={styles.query}>Have any Questions?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
