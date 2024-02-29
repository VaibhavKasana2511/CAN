import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import Header from '../../Components/common/Header/Header';

const Portfolio = () => {
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
  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.portfolioContainer}>
        <Text style={styles.headingText}>My Portfolio</Text>
      </View>
    </View>
  );
};

export default Portfolio;
