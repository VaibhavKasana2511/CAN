import {StyleSheet, Text, View} from 'react-native';
import {moderateScale, verticalScale, horizontalScale} from '@utils/Metrics';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subContainer: {
    paddingHorizontal: moderateScale(15),
  },
  headingText: {
    fontFamily: 'Nunito-Regular',
    color: '#000000',
    fontSize: moderateScale(20),
    marginTop: verticalScale(15),
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
    marginVertical: '1.5%',
  },
  listSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listName: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(18),
    color: '#0A4975',
    // marginTop: 5,
  },
  listMail: {
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(16),
    color: '#00000080',
  },
  Icon: {
    marginTop: verticalScale(3),
    marginRight: horizontalScale(7),
    resizeMode: 'contain',
  },
  phoneIcon: {
    marginTop: verticalScale(3),
    height: moderateScale(14),
    width: moderateScale(14),
    marginRight: horizontalScale(7),
    resizeMode: 'contain',
  },
  mailIcon: {
    marginTop: verticalScale(6),
    marginRight: horizontalScale(7),
    resizeMode: 'contain',
  },
  listContainer: {
    backgroundColor: '#FFFFFF',
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
    marginTop: verticalScale(10),
    elevation: moderateScale(20),
    shadowColor: '#00000040',
  },
});
