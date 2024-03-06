import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './Styles';
import {Header} from '@components';
import {IMAGES} from '@assets/images';
import {verticalScale, horizontalScale, moderateScale} from '@utils/Metrics';

export default function Portfolio() {
  const data = [
    {
      name: 'Jerry Infotech',
      text: 'On demand food delivery startup',
      amount: 'INR 3.50 lakhs',
      shares: 1.345,
      valuation: 'INR 3.5 Cr',
      roundSize: 'INR 50 lakhs',
      investment: '12/10/22',
    },
    {
      name: 'XYC Inc',
      text: 'Authentic Indian Tea',
      amount: 'INR 3.50 lakhs',
      shares: 1.279,
      valuation: 'INR 3.5 Cr',
      roundSize: 'INR 20 lakhs',
      investment: '12/10/22',
    },
    {
      name: 'ABC Inc',
      text: 'Robotics, drones',
      amount: 'INR 4.50 lakhs',
      shares: 435,
      valuation: 'INR 5 Cr',
      roundSize: 'INR 50 lakhs',
      investment: '12/10/22',
    },
  ];

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
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}
