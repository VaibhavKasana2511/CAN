import {FlatList, Text, TouchableOpacity, View, Modal} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {Header} from '@components';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCategory,
  fetchForumCategories,
} from '../../../redux/slices/forumSlice';
import LoadingScreen from '../../../components/common/loader/LoadingScreen';
import {useLazyFormCategoriesQuery} from '../../../redux/service/forumService';

const Category = ({navigation}) => {
  const dispatch = useDispatch();
  const [forumData, setForumData] = useState([]);
  const [data, isLoading] = useLazyFormCategoriesQuery();

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
      <Modal
        transparent={true}
        animationType="fade"
        visible={isLoading.isLoading}>
        <LoadingScreen />
      </Modal>
    </View>
  );
};

export default Category;
