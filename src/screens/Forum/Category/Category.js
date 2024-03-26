import {FlatList, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {Header} from '@components';
import {useDispatch, useSelector} from 'react-redux';
import {useLazyFormCategoriesQuery} from '../../../redux/service/authService';
import {
  fetchCategory,
  fetchForumCategories,
} from '../../../redux/slices/forumSlice';

const Category = ({navigation}) => {
  const dispatch = useDispatch();
  const [forumData, setForumData] = useState([]);
  const [data] = useLazyFormCategoriesQuery();

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await data();
        const result = response.data.result;
        setForumData(result);
        console.log('Data:', result);
      } catch (error) {
        console.error('Error fetching upcoming events:', error);
      }
    };
    fetchFormData();
  }, []);

  function mapIdAndCategory(data) {
    return data.map(item => ({
      id: item._id,
      category_name: item.category_name,
    }));
  }

  const infoData = item => {
    console.log('FORMDATA==>', item);
    dispatch(fetchCategory(item));
    navigation.navigate('Details');
    const categoryNames = mapIdAndCategory(forumData);
    dispatch(fetchForumCategories(categoryNames));
  };

  const renderForumData = ({item}) => (
    <View style={styles.dataContainer}>
      <TouchableOpacity onPress={() => infoData(item)}>
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
