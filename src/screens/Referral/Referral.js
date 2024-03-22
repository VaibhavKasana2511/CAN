import {StyleSheet, Text, View, TextInput, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './Styles';
import {Header, CustomButtom} from '@components';
import {IMAGES} from '@assets/images';
import {horizontalScale, moderateScale, verticalScale} from '@utils/Metrics';
import {
  useAddReferralMutation,
  useLazyReferralListQuery,
} from '../../redux/service/authService';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

const Referral = () => {
  const userData = useSelector(state => state.auth.user.result);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [referrals, setReferrals] = useState([]);
  const [renderReferral, setRenderReferral] = useState(false);

  const param = {
    user_mandate: userData._id,
    name: name,
    email: email,
    phone: phone,
  };

  const [addReferralMutation] = useAddReferralMutation();
  const [data] = useLazyReferralListQuery();

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const fetchReferral = async () => {
    try {
      const res = await data(userData._id);
      const response = res.data.result;
      console.log('RESPONSE====>', response);
      setReferrals(response);
      console.log('DATA', response);
    } catch (err) {
      console.log('Error==>', err);
    }
  };

  useEffect(() => {
    fetchReferral();
  }, [renderReferral]);

  const addReferral = async () => {
    console.log('PARAM==>', param);
    try {
      const data = addReferralMutation(param);
      console.log('RQWER', data);
      setRenderReferral(!renderReferral);
      setName('');
    } catch (err) {
      console.log('Error==>', err);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header drawer={false} back={true} />
      <ScrollView style={styles.subContainer}>
        <Text style={styles.headingText}>
          Refer someone whom you think can be part of CAN
        </Text>
        <View style={styles.updateButton}>
          <Text style={styles.inputHeading}>Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Name"
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.allTextInput}>
          <Text style={styles.inputHeading}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Email"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.allTextInput}>
          <Text style={styles.inputHeading}>Phone</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Phone"
            onChangeText={text => setPhone(text)}
          />
        </View>
        <View style={styles.updateButton}>
          <CustomButtom title="Submit" onPress={addReferral} />
        </View>
        <Text style={styles.headingText}>My Referrals</Text>
        {referrals.map((item, index) => (
          <View key={index} style={styles.listContainer}>
            <View style={styles.listSection}>
              <Text style={styles.listName}>{item.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.Icon} source={IMAGES.dateIcon} />
                <Text style={styles.listMail}>
                  {formatDate(item.updatedAt)}
                </Text>
              </View>
            </View>
            <View style={styles.listSection}>
              <View style={{flexDirection: 'row', marginTop: verticalScale(5)}}>
                <Image style={styles.mailIcon} source={IMAGES.mailIcon} />
                <Text style={styles.listMail}>{item.email}</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: verticalScale(5)}}>
                <Image style={styles.phoneIcon} source={IMAGES.phoneIcon} />
                <Text style={styles.listMail}>{item.phone}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Referral;
