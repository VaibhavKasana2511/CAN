import {StyleSheet, Text, View} from 'react-native';
import {moderateScale, verticalScale, horizontalScale} from '@utils/Metrics';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subContainer: {padding: moderateScale(15)},
  headingText: {
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
    fontSize: moderateScale(22),
  },
  inputHeading: {
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(18),
  },
  textInput: {
    borderWidth: moderateScale(1),
    borderColor: '#0A49755E',
    borderRadius: moderateScale(8),
    paddingLeft: horizontalScale(15),
    marginTop: verticalScale(5),
  },
  allTextInput: {
    marginTop: verticalScale(10),
  },
  updateButton: {
    marginTop: '7%',
  },
});
