import React, {useState, useEffect} from 'react';
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
import {fetchUpcomingEvents} from '../../utils/services/ApiCalling';
import {useSelector} from 'react-redux';
import {useLazyFetchUpcomingEventsQuery} from '../../redux/service/mandateService';

const UpcomingEvents = () => {
  const token = useSelector(state => state.root.auth.user?.Token);
  const [selectDate, setSelectDate] = useState('2023-09-10');
  const [events, setEvents] = useState([]);
  const [data] = useLazyFetchUpcomingEventsQuery();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await data();
        setEvents(res);
        console.log('Data:', res);
      } catch (error) {
        console.error('Error fetching upcoming events:', error);
      }
    };
    fetchData();
  }, [token]);

  const isValidUrl = url => {
    const urlPattern = /\.(com|org|net|gov|edu)$/i;
    return urlPattern.test(url);
  };

  const handleMeetingLinkPress = async url => {
    try {
      let fullUrl =
        url.startsWith('http://') || url.startsWith('https://')
          ? url
          : 'https://' + url;
      console.log('Attempting to open URL:', fullUrl);
      Linking.openURL(fullUrl);
    } catch (error) {
      console.error('Error opening URL: ', error);
      Alert.alert('Error', 'Unable to open URL');
    }
  };

  const filteredEvents = events.filter(item => {
    return selectDate && item.date.split('T')[0] === selectDate;
  });

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
              {selectDate ? selectDate : 'Select a Date'}
            </Text>
          </View>
          {filteredEvents.map((item, index) => (
            <View key={index} style={styles.itemsContainer}>
              <Text style={styles.topicTxt}>{item.topic}</Text>
              <View style={styles.items}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.typeTxt}>Type: </Text>
                  <Text style={{fontFamily: 'Nunito-Regular', fontSize: 16}}>
                    {item.title}
                  </Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={IMAGES.clock} />
                  <Text style={styles.imgTxt}>{item.time}</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={IMAGES.landmarkIcon} />
                  <Text style={styles.imgTxt}>{item.location}</Text>
                </View>
              </View>
              <Text style={styles.subContainerAgenda}>{item.description}</Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Text style={styles.subContainerMeetingText}>Meeting URL:</Text>
                {isValidUrl(item.meeting_url) ? (
                  <TouchableOpacity
                    onPress={() => handleMeetingLinkPress(item.meeting_url)}>
                    <Text style={styles.subContainerUrl}>
                      {item.meeting_url}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <Text style={styles.subContainerMeetingText}>None</Text>
                )}
              </View>
              <Text style={styles.pdfTxt}>
                Pitch Deck:
                {item.file.map((fileUrl, i) => (
                  <TouchableOpacity
                    key={i}
                    style={styles.pdfLogo}
                    onPress={() => handleMeetingLinkPress(fileUrl)}>
                    <Image source={IMAGES.pdf} />
                  </TouchableOpacity>
                ))}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default UpcomingEvents;
