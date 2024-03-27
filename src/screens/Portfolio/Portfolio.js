import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import {Header} from '@components';
import {IMAGES} from '@assets/images';
import {verticalScale, horizontalScale, moderateScale} from '@utils/Metrics';
import {useLazyUserPortfolioQuery} from '../../redux/service/authService';
import {useSelector} from 'react-redux';

export default function Portfolio() {
  const userData = useSelector(state => state.root?.auth.user.result);
  console.log('usd', userData);
  const [data] = useLazyUserPortfolioQuery();
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await data(userData._id);
        const result = response.data.result;
        console.log('R==>', result);
        // setDummyData(result);
      } catch (err) {
        console.log('ERROR', err);
      }
    };
    fetchPortfolio();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.itemData}>
      <View style={{flexDirection: 'row'}}>
        <Image source={IMAGES.contentImage} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
      <View style={styles.amountSection}>
        <Text style={styles.details}>
          <Text style={styles.txt}>Amount: </Text> {item.amount}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.txt}># of shares: </Text> {item.shares}
        </Text>
      </View>
      <View style={styles.valuationSection}>
        <Text style={styles.details}>
          <Text style={styles.txt}>At Valuation: </Text> {item.valuation}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.txt}>Round Size: </Text> {item.roundSize}
        </Text>
      </View>
      <View style={{marginTop: verticalScale(2)}}>
        <Text style={styles.details}>
          <Text style={styles.txt}>Date of Investment: </Text>
          {item.investment}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>My Portfolio</Text>
        <FlatList
          data={dummyData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}
