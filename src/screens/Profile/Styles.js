import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale, horizontalScale} from '@utils/Metrics';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subContainer: {
    // backgroundColor: 'red',
    padding: moderateScale(15),
    justifyContent: 'space-between',
  },
  headingText: {
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
    fontSize: moderateScale(22),
  },
  accountImage: {
    width: moderateScale(90),
    height: moderateScale(90),
    backgroundColor: '#D9D9D9',
    borderRadius: moderateScale(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10),
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
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: moderateScale(1),
    borderColor: '#0A49755E',
    borderRadius: moderateScale(8),
    marginTop: verticalScale(5),
  },
  allTextInput: {
    marginTop: verticalScale(10),
  },
  updateButton: {
    marginTop: '7%',
  },
  dateContainer: {
    borderWidth: moderateScale(1),
    borderColor: '#0A49755E',
    borderRadius: moderateScale(8),
    flexDirection: 'row',
    height: verticalScale(50),
    marginTop: verticalScale(5),
  },
  inputDate: {
    paddingLeft: horizontalScale(10),
    color: '#000000A8',
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-Regular',
    flex: 1,
  },
  dateIcon: {
    margin: moderateScale(15),
    marginRight: moderateScale(15),
  },
  dropDown: {
    borderWidth: moderateScale(1),
    borderColor: '#0A49755E',
    borderRadius: moderateScale(8),
    paddingLeft: horizontalScale(15),
    marginTop: verticalScale(5),
    paddingVertical: verticalScale(10),
    paddingRight: horizontalScale(10),
  },
});
