import {StyleSheet} from 'react-native';
import {verticalScale, moderateScale, horizontalScale} from '@utils/Metrics';
import {ValidationError} from 'yup';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },

  chatContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: horizontalScale(15),
    // paddingVertical: verticalScale(5),
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'red',
    marginTop: verticalScale(10),
  },

  txtInput: {
    flex: 1,
    width: '100%',
    paddingLeft: verticalScale(10),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    borderColor: '#0A49755E',
    // backgroundColor: 'red',
    marginVertical: verticalScale(10),
    marginLeft: horizontalScale(15),
    marginRight: horizontalScale(15),
  },

  sendBtn: {
    position: 'absolute',
    padding: moderateScale(5),
    bottom: verticalScale(10),
    right: horizontalScale(25),
  },

  myMsgContainer: {
    // marginBottom: verticalScale(10),
    fontSize: moderateScale(18),
    color: '#000000',
    fontFamily: 'Nunito-Regular',
  },

  otherMsgContainer: {
    // marginBottom: verticalScale(10),
    fontSize: moderateScale(18),
    color: '#000000',
    fontFamily: 'Nunito-Regular',
  },

  myTxtContainer: {
    padding: moderateScale(10),
    marginRight: horizontalScale(15),
    marginBottom: verticalScale(5),
    // borderRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
    backgroundColor: '#0A49751A',
    alignSelf: 'flex-end',
  },

  otherTxtContainer: {
    marginLeft: horizontalScale(15),
    marginBottom: verticalScale(5),
    padding: moderateScale(10),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    backgroundColor: '#DADADA61',
    alignSelf: 'flex-start',
  },

  message: {},

  rightTimestamp: {
    fontSize: moderateScale(14),
    color: '#00000073',
    fontFamily: 'Nunito-Regular',
    paddingRight: horizontalScale(15),
    alignSelf: 'flex-end',
    marginBottom: verticalScale(15),
  },

  leftTimestamp: {
    fontSize: moderateScale(14),
    color: '#00000073',
    fontFamily: 'Nunito-Regular',
    paddingLeft: horizontalScale(15),
    marginBottom: verticalScale(10),
  },

  dateStamp: {
    alignSelf: 'center',
    fontSize: moderateScale(14),
    color: '#00000073',
    fontFamily: 'Nunito-Regular',
    marginBottom: verticalScale(10),
    marginTop: verticalScale(10),
  },
});
