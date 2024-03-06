import {FlatList, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header} from '@components';

const Category = ({navigation}) => {
  const forumData = [
    {
      title: 'General Guideline',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Pitch Session',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Valuations & MRR',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'General Guideline',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Pitch Session',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  const infoData = () => {
    navigation.navigate('Details');
  };

  const renderForumData = ({item}) => (
    <View style={styles.dataContainer}>
      <TouchableOpacity onPress={infoData}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Forum Category</Text>
        <View style={styles.forumDataList}>
          <FlatList
            data={forumData}
            renderItem={renderForumData}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default Category;
