import {FlatList, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {Header} from '@components';
import {fetchForumCategory} from '../../../utils/services/ApiCalling';
import {useSelector} from 'react-redux';

const Category = ({navigation}) => {
  const token = useSelector(state => state.auth.user?.Token);
  const [forumData, setForumData] = useState([]);

  useEffect(() => {
    const fetchFormData = async () => {
      console.log('Token', token);
      try {
        const data = await fetchForumCategory(token);
        setForumData(data);
        console.log('Data:', data);
      } catch (error) {
        console.error('Error fetching upcoming events:', error);
      }
    };
    fetchFormData();
  }, [token]);

  const infoData = () => {
    navigation.navigate('Details');
  };

  const renderForumData = ({item}) => (
    <View style={styles.dataContainer}>
      <TouchableOpacity onPress={infoData}>
        <Text style={styles.title}>{item.category_name}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{item.description}</Text>
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
