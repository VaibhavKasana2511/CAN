import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomButtom from '../customButton/CustomButtom';

const CustomPopUp = ({title, visible, onPress, text}) => {
  const [resetScreen, setResetScreen] = useState();
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.modalContainer}>
        <View style={styles.modalSubContainer}>
          <Text style={styles.resetHeading}>{title}</Text>
          <Text style={styles.modalText}>{text}</Text>
          <CustomButtom title="Continue" onPress={onPress} />
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
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    elevation: 20,
  },
  modalText: {
    fontFamily: 'Nunito-Medium',
    fontSize: 19,
    color: '#000000A8',
    textAlign: 'center',
  },
  modalContinueButton: {
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 15,
    width: '100%',
  },
  resetHeading: {
    fontSize: 30,
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
  },
});
