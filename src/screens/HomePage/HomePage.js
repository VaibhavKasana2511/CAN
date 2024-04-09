import {View, Text, Image, ScrollView, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './Styles';
import {Header} from '@components';
import {IMAGES} from '@assets/images';
import {verticalScale} from '@utils/Metrics';
import {useDispatch, useSelector} from 'react-redux';
import {socketInit} from '../../utils/Socket';
import SOCKET from '../../constants/socket';
import {useRoomIDMutation} from '../../redux/service/chatService';
import {fetchRoomId} from '../../redux/slices/chatSlice';
import {
  useGetCalendarEventsMutation,
  useMandateListMutation,
} from '../../redux/service/mandateService';
import LoadingScreen from '../../components/common/loader/LoadingScreen';

const HomePage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.root.auth?.user?.result);
  const token = useSelector(state => state.root.auth?.user?.Token);
  const room_id = useSelector(state => state.root?.chat);
  console.log('HOMEPAGEEE>>>>>>', userData);
  console.log('ROOM--ID===>', room_id);

  let eventStartDate = new Date().toLocaleDateString();
  let startDate = new Date();
  let endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);

  let eventEndDate = `${
    endDate.getMonth() + 1
  }/${endDate.getDate()}/${endDate.getFullYear()}`;

  const [mandateData, setMandateData] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [mandateListMutation] = useMandateListMutation();
  const [getCalendarEventsMutation, data] = useGetCalendarEventsMutation();
  console.log('isLoading', data.isLoading);
  const [roomIDMutation] = useRoomIDMutation();

  const fetchMandateList = async () => {
    try {
      const response = await mandateListMutation();
      console.log('respnse', response.data.result);
      if (response.data.status) {
        setMandateData(response.data.result);
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  const fetchCalendarEvents = async () => {
    console.log('Start Date', eventStartDate);
    console.log('End Date', eventEndDate);
    try {
      const res = await getCalendarEventsMutation({
        start_date: eventStartDate,
        end_date: eventEndDate,
      });
      const result = res.data.result;
      console.log('d==>', result);
      setCalendarEvents(result);
    } catch (err) {
      console.log('error', err);
    }
  };

  useEffect(() => {
    fetchCalendarEvents();
    fetchMandateList();
  }, []);

  const getRoomID = async data => {
    try {
      const roomID = await roomIDMutation(data);
      const response = roomID.data?.result;
      const status = roomID.data?.message;
      if (status) {
        dispatch(fetchRoomId(response._id));
      }
    } catch (err) {
      console.log('Error==>', err);
    }
  };

  useEffect(() => {
    socketInit(userData._id);
    let data = {
      senderId: SOCKET.RECEIVER_ID,
      recieverId: userData._id,
    };

    getRoomID(data);
  }, []);

  const renderItem = ({item, index}) => (
    <View key={index} style={styles.listContainer}>
      <View style={styles.section1}>
        <Image source={{uri: item.logo}} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.listName}>{item.company_name}</Text>
          <Text style={styles.listText}>{item.description}</Text>
        </View>
      </View>
      <View style={styles.section2}>
        <Text style={styles.section2Heading}>
          MRR:{' '}
          <Text style={styles.section2Text}>
            {item.mrr.mrr_amount} {item.mrr.mrr_amount_in}
          </Text>
        </Text>
        <Text style={styles.section2Heading}>
          Round Size:{' '}
          <Text style={styles.section2Text}>
            {item.round_size.round_size_amount}{' '}
            {item.round_size.round_size_amount_in}
          </Text>
        </Text>
      </View>
      <View style={styles.section3}>
        <Text style={styles.section2Heading}>
          Valuation:{' '}
          <Text style={styles.section2Text}>
            {item.valuation.valuation_amount}{' '}
            {item.valuation.valuation_amount_in}
          </Text>
        </Text>
        <Text style={styles.section2Heading}>
          Commitment:{''}
          <Text style={styles.section2Text}>
            {item.commitment.commitment_amount}{' '}
            {item.commitment.commitment_amount_in}
          </Text>
        </Text>
      </View>
    </View>
  );

  const renderEvents = ({item, index}) => {
    const eventDate = new Date(item.date);
    const formattedDate = eventDate.getDate(); // Extracts the date part
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const formattedMonth = monthNames[eventDate.getMonth()]; // Extracts the month name

    return (
      <View key={index} style={styles.calendarMain}>
        <View style={styles.calendarContainer}>
          <Text style={styles.calendarDate}>{formattedDate}</Text>
          {/* Displaying the formatted month */}
          <Text style={styles.calendarMonth}>{formattedMonth}</Text>
        </View>
        <View style={styles.calendarContent}>
          <Text style={styles.eventHeading}>{item.title}</Text>
          <Text style={styles.agendaText}>{item.description}</Text>
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
              <Image
                style={{marginTop: 2, marginLeft: '12%'}}
                source={IMAGES.landmarkIcon}
              />
              <Text style={{marginBottom: 2, marginLeft: 5}}>
                {item.location}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}>
        <Text style={styles.headingText}>Active Mandate</Text>
        {mandateData.map((item, index) => renderItem({item, index}))}
        <Text style={styles.headingText}>Calendar</Text>
        {calendarEvents.map((item, index) => renderEvents({item, index}))}
      </ScrollView>
      <Modal transparent={true} animationType="fade" visible={data.isLoading}>
        <LoadingScreen />
      </Modal>
    </View>
  );
};

export default HomePage;
