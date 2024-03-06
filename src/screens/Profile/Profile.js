import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {Header, CustomButtom} from '@components';
import DateTimePicker from '@react-native-community/datetimepicker';
import {IMAGES} from '@assets/images';
import {useState} from 'react';

const Profile = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };
  return (
    <View style={styles.mainContainer}>
      <Header drawer={false} back={true} />
      <ScrollView>
        <View style={styles.subContainer}>
          <Text style={styles.headingText}>My Profile</Text>
          <View style={styles.accountImage}>
            <Image source={IMAGES.cameraIcon} />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>Name</Text>
            <TextInput style={styles.textInput} placeholder="Enter Name" />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>Email</Text>
            <TextInput style={styles.textInput} placeholder="Enter Email" />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>Date of Birth</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <View style={styles.dateContainer}>
                <TextInput
                  style={styles.inputDate}
                  value={date.toLocaleDateString()}
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
            <TextInput style={styles.textInput} placeholder="Enter Phone" />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>Organization</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Organization"
            />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>State</Text>
            <TextInput style={styles.textInput} placeholder="Select" />
          </View>
          <View style={styles.allTextInput}>
            <Text style={styles.inputHeading}>City</Text>
            <TextInput style={styles.textInput} placeholder="Enter City" />
          </View>
          <View style={styles.updateButton}>
            <CustomButtom title="Update" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
