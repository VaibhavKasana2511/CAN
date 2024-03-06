import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {Header} from '@components';
import {IMAGES} from '@assets/images';
import {verticalScale} from '../../utils/Metrics';

const HomePage = () => {
  const data = [
    {
      name: 'Jerry Infotech',
      Text: 'On demand food delivery startup',
      MRR: 'INR 1.50 Lakhs',
      Round_Size: 'INR 50 Lakhs',
      Valuation: 'INR 3.6 cr',
      Commitment: 'INR 20 Lakhs',
    },
    {
      name: 'Chaiwala',
      Text: 'Authentic Indian Tea',
      MRR: 'INR 1.50 Lakhs',
      Round_Size: 'INR 50 Lakhs',
      Valuation: 'INR 3.6 cr',
      Commitment: 'INR 20 Lakhs',
    },
  ];

  const date = [
    {
      date: '02',
      month: 'NOV',
      Meeting: 'Startup World Cup 2022',
      agenda: 'Lorem Ipsum is simply dummy',
      time: '4 PM',
      location: 'Office',
    },
    {
      date: '12',
      month: 'NOV',
      Meeting: 'Web Summit Pitch 2022',
      agenda: 'Lorem Ipsum is simply dummy',
      time: '6 PM',
      location: 'Virtual',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.listContainer}>
      <View style={styles.section1}>
        <Image source={IMAGES.contentImage} />
        <View style={{marginLeft: verticalScale(10)}}>
          <Text style={styles.listName}>{item.name}</Text>
          <Text style={styles.listText}>{item.Text}</Text>
        </View>
      </View>
      <View style={styles.section2}>
        <Text style={styles.section2Heading}>
          MRR: <Text style={styles.section2Text}>{item.MRR}</Text>
        </Text>
        <Text style={styles.section2Heading}>
          Round Size: <Text style={styles.section2Text}>{item.Round_Size}</Text>
        </Text>
      </View>
      <View style={styles.section2}>
        <Text style={styles.section2Heading}>
          Valuation: <Text style={styles.section2Text}>{item.Valuation}</Text>
        </Text>
        <Text style={styles.section2Heading}>
          Commitment: <Text style={styles.section2Text}>{item.Commitment}</Text>
        </Text>
      </View>
    </View>
  );

  const renderEvents = ({item, index}) => (
    <View style={styles.calendarMain}>
      <View style={styles.calendarContainer}>
        <Text style={styles.calendarDate}>{item.date}</Text>
        <Text style={styles.calendarMonth}>{item.month}</Text>
      </View>
      <View style={styles.calendarContent}>
        <Text style={styles.eventHeading}>{item.Meeting}</Text>
        <Text style={styles.agendaText}>{item.agenda}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: verticalScale(5),
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image style={{marginTop: 2}} source={IMAGES.clock} />
            <Text style={{marginBottom: 2, marginLeft: 5}}>{item.time}</Text>
          </View>
          <View
            style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
            <Image style={{marginTop: 2}} source={IMAGES.landmarkIcon} />
            <Text style={{marginBottom: 2, marginLeft: 5}}>{item.time}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.contentContainer}>
        <Text style={styles.headingText}>Active Mandate</Text>
        <FlatList renderItem={renderItem} data={data} />
        <Text style={styles.headingText}>Calendar</Text>
        <FlatList renderItem={renderEvents} data={date} />
      </View>
    </View>
  );
};

export default HomePage;
