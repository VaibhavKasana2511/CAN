import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header} from '@components';

const Details = ({navigation}) => {
  const addAnswer = () => {
    navigation.navigate('AnsQues');
  };

  const addQues = () => {
    navigation.navigate('HaveQuestions');
  };

  const detailData = [
    {
      ques: 'Who is evaluating the initial valuations?',
      ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      ques: 'What is MRR?',
      ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      ques: 'What is round size?',
    },
    {
      ques: 'What is commitment?',
      ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  const renderdetailData = ({item}) =>
    item.ans ? (
      <View style={styles.dataContainer}>
        <Text style={styles.ques}>{item.ques}</Text>
        <Text style={styles.ans}>{item.ans}</Text>
      </View>
    ) : (
      <TouchableOpacity onPress={addAnswer} style={styles.dataContainer}>
        <Text style={styles.ques}>{item.ques}</Text>
        <TouchableOpacity onPress={addAnswer}>
          <Text style={styles.addAns}>Add an answer</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );

  return (
    <View style={styles.mainContainer}>
      <Header back={true} drawer={false} />
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.heading}>Valuations & MRR</Text>
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
