import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header} from '@components';

const Details = () => {
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
      ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      ques: 'What is commitment?',
      ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  const renderdetailData = ({item}) => (
    <View style={styles.dataContainer}>
      <Text style={styles.ques}>{item.ques}</Text>
      <Text style={styles.ans}>{item.ans}</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header />
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

        <TouchableOpacity style={styles.queryContainer}>
          <Text style={styles.query}>Have any Questions?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
