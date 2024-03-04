import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {Header} from '@components';
import {IMAGES} from '@assets/images';
import {Calendar} from 'react-native-calendars';

const UpcomingEvents = () => {
  const [selectDate, setSelectDate] = useState(null);

  const events = [
    {
      topic: 'Pitch Session 1: Jasper Infotech',
      type: 'Pitch Session',
      time: '4 PM',
      location: 'Virtual',
      agenda:
        'Pitch Session for 3 startups: Jasper Infotech, My Home, XYZ housing',
      Meeting: 'https://zoom.us/meeting_id/32432',
      Document: 'PDF',
    },
    {
      topic: 'Pitch Session 2: My Home',
      type: 'Pitch Session',
      time: '4 PM',
      location: 'Virtual',
      agenda:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      Meeting: 'https://zoom.us/meeting_id/32432',
      Document: 'PDF',
    },
    {
      topic: 'Pitch Session 3: My Home',
      type: 'Pitch Session',
      time: '4 PM',
      location: 'Virtual',
      agenda: 'Pitch Session for My Home',
      Meeting: 'https://zoom.us/meeting_id/32432',
      Document: 'PDF',
    },
  ];

  const handleMeetingLinkPress = url => {
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Header />

        <View style={styles.subContainer}>
          <Text style={styles.heading}>Calendar</Text>
          <Calendar
            onDayPress={day => {
              console.log('Date:', day);
              setSelectDate(day.dateString);
            }}
            markedDates={{
              [selectDate]: {
                selected: true,
                selectedColor: 'rgba(255, 189, 89, 1)',
                disableTouchEvent: true,
              },
            }}
            hideExtraDays={true}
          />

          <View style={styles.selectDateContainer}>
            <Text style={styles.selectDateText}>
              {selectDate ? selectDate : 'No date selected'}
            </Text>
          </View>

          {events.map((item, index) => (
            <View key={index} style={styles.itemsContainer}>
              <Text style={styles.topicTxt}>{item.topic}</Text>
              <View style={styles.items}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.typeTxt}>Type: </Text>
                  <Text style={{fontFamily: 'Nunito-Regular', fontSize: 16}}>
                    {item.type}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image source={IMAGES.clock} />
                  <Text style={styles.imgTxt}>{item.time}</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={IMAGES.landmarkIcon} />
                  <Text style={styles.imgTxt}>{item.location}</Text>
                </View>
              </View>
              <Text style={styles.subContainerAgenda}>{item.agenda}</Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Text style={styles.subContainerMeetingText}>Meeting URL:</Text>
                <TouchableOpacity
                  onPress={() => handleMeetingLinkPress(item.Meeting)}>
                  <Text style={styles.subContainerUrl}> {item.Meeting}</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.pdfTxt}>Pitch Deck: {item.Document}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default UpcomingEvents;
