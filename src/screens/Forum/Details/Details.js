import {
  FlatList,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {Header} from '@components';
import {useDispatch, useSelector} from 'react-redux';
import {fetchQuestionData} from '../../../redux/slices/forumSlice';
import LoadingScreen from '@components/common/loader/LoadingScreen';
import {useLazyCategoryQuestionQuery} from '../../../redux/service/forumService';

const Details = ({navigation}) => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.root.forum.category);
  console.log('STATE==>', userState);
  const globalState = useSelector(state => state.root.forum.globalState);
  console.log('globalState==>', globalState);
  const [data, isLoading] = useLazyCategoryQuestionQuery();
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
  }, [globalState]);

  const addAnswer = item => {
    console.log('ITEM@#$%==>', item);
    dispatch(fetchQuestionData(item));
    navigation.navigate('AnsQues');
  };

  const addQues = () => {
    navigation.navigate('HaveQuestions');
  };

  return (
    <View style={styles.mainContainer}>
      <Header back={true} drawer={false} />
      <ScrollView contentContainerStyle={styles.subContainer}>
        <View>
          <Text style={styles.heading}>{userState.category_name}</Text>
          <TouchableOpacity></TouchableOpacity>
        </View>
        {detailData.map(
          (item, index) => (
            console.log('ITEM==>', item),
            item.answerd === 'yes' ? (
              item.answer !== '' ? (
                <View key={index} style={styles.dataContainer}>
                  <Text style={styles.ques}>{item.quetion}</Text>
                  <Text style={styles.ans}>{item.answer}</Text>
                </View>
              ) : (
                <TouchableOpacity
                  key={index}
                  onPress={() => addAnswer(item)}
                  style={styles.dataContainer}>
                  <Text style={styles.ques}>{item.quetion}</Text>
                  <TouchableOpacity onPress={() => addAnswer(item)}>
                    <Text style={styles.addAns}>Add an answer</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity
                key={index}
                onPress={() => addAnswer(item)}
                style={styles.dataContainer}>
                <Text style={styles.ques}>{item.quetion}</Text>
                <TouchableOpacity onPress={() => addAnswer(item)}>
                  <Text style={styles.addAns}>Add an answer</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            )
          ),
        )}

        <TouchableOpacity onPress={addQues} style={styles.queryContainer}>
          <Text style={styles.query}>Have any Questions?</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isLoading.isLoading}>
        <LoadingScreen />
      </Modal>
    </View>
  );
};

export default Details;
