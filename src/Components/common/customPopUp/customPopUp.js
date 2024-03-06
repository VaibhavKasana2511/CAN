import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomButtom from '../customButton/CustomButtom';
import {moderateScale, verticalScale} from '@utils/Metrics';

const CustomPopUp = ({
  title,
  visible,
  onPress,
  text,
  buttonText,
  doublebutton,
  noTitle,
  onPressCancel,
}) => {
  const [resetScreen, setResetScreen] = useState(doublebutton);
  const [isAuthenticated, setisAuthenticated] = useState(noTitle);
  return isAuthenticated ? (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.modalContainer}>
        <View style={styles.modalSubContainer}>
          <Text style={styles.resetHeading}>{title}</Text>
          <Text style={styles.modalText}>{text}</Text>
          <CustomButtom
            title={buttonText}
            onPress={onPress}
            twoButton={doublebutton}
            onPressCancel={onPressCancel}
          />
        </View>
      </View>
    </Modal>
  ) : (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.modalContainer}>
        <View style={styles.modalSubContainer}>
          <Text style={styles.modalText}>{text}</Text>
          <CustomButtom
            title={buttonText}
            onPress={onPress}
            twoButton={resetScreen}
            onPressCancel={onPressCancel}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomPopUp;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalSubContainer: {
    backgroundColor: '#FFFFFF',
    width: '91%',
    padding: moderateScale(31),
    borderRadius: moderateScale(10),
    elevation: moderateScale(20),
  },
  modalText: {
    fontFamily: 'Nunito-Medium',
    fontSize: moderateScale(19),
    color: '#000000A8',
    paddingTop: verticalScale(10),
  },
  modalContinueButton: {
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(15),
    width: '100%',
  },
  resetHeading: {
    fontSize: moderateScale(30),
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
  },
});
