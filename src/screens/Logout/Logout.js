import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomPopUp from '../../Components/common/customPopUp/customPopUp';

const Logout = () => {
  const [doubleButton, setDoubleButton] = useState(true);
  return (
    <View styles={styles.mainContainer}>
      <CustomPopUp
        title="Logout"
        text="Are you sure you want to Logout?"
        buttonText="Logout"
        dButton={doubleButton}
      />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
