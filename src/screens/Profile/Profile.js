import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {Header, CustomButtom} from '@components';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Dropdown} from 'react-native-element-dropdown';
import {IMAGES} from '@assets/images';
import {useState} from 'react';
import {useUpdateProfileMutation} from '../../redux/service/authService';
import {useSelector} from 'react-redux';

const Profile = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
    setDob(formatDate(currentDate));
  };

  const formatDate = date => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    setDob(`${month}/${day}/${year}`);
    return `${month}/${day}/${year}`;
  };

  const userData = useSelector(state => state.root?.auth.user.result);
  console.log('DATA===>', userData);

  const [updateProfileMutation] = useUpdateProfileMutation();
  const [name, setName] = useState(userData.name);
  const [dob, setDob] = useState(userData.dob);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(String(userData?.phone));
  const [organization, setOrganization] = useState(userData.organization);
  const [state, setState] = useState(userData.state);
  const [city, setCity] = useState(userData.city);

  const allstate = useSelector(
    state => state.root.auth.allstates?.result ?? [],
  );
  console.log('STATES===>', allstate);

  const params = {
    name: name,
    email: userData.email,
    dob: dob,
    phone: phone,
    organization: organization,
    state: state,
    city: city,
  };

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    Object.keys(params).forEach(key => {
      formData.append(key, params[key]);
    });
    console.log('PARAMS===>', formData);
    try {
      const response = await updateProfileMutation(params);
      console.log('RESPONSE===>', response);
    } catch (err) {
      console.log('ERROR==>', err);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header drawer={false} back={true} />
      <ScrollView>
        <View style={styles.subContainer}>
          <Text style={styles.headingText}>My Profile</Text>

          {userData.profile_photo === '' ? (
            <View style={styles.accountImage}>
              <Image source={IMAGES.cameraIcon} />
            </View>
          ) : (
            <View style={styles.accountImage}>
              <Image source={IMAGES.cameraIcon} />
            </View>
          )}

          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Name"
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>Email</Text>
            <TextInput
              editable={false}
              style={styles.textInput}
              placeholder="Enter Email"
              value={email}
            />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>Date of Birth</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <View style={styles.dateContainer}>
                <TextInput
                  style={styles.inputDate}
                  value={dob}
                  editable={false}
                  placeholder="Enter Date"
                />
                <Image style={styles.dateIcon} source={IMAGES.calendarIcon} />
              </View>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>Phone</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Phone"
              onChangeText={text => setPhone(text)}
              value={phone}
            />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>Organization</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Organization"
              value={organization}
              onChangeText={text => setOrganization(text)}
            />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>State</Text>
            <Dropdown
              data={allstate}
              placeholder={state}
              labelField="state"
              valueField="_id"
              onChange={item => setState(item.state)}
              style={styles.dropDown}
              value={state}
            />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>City</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter City"
              value={city}
              onChangeText={text => setCity(text)}
            />
          </View>
          <View style={styles.updateButton}>
            <CustomButtom title="Update" onPress={handleUpdateProfile} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
