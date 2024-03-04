import {StyleSheet} from 'react-native';
import {verticalScale, horizontalScale, moderateScale} from '@utils/Metrics';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  subContainer: {
    padding: moderateScale(15),
  },

  headingText: {
    fontSize: moderateScale(22),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  subHeadingText: {
    fontSize: moderateScale(20),
    marginTop: verticalScale(10),
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },

  inputContainer: {
    marginTop: verticalScale(10),
  },

  txtInputContainer: {
    marginBottom: verticalScale(10),
  },

  inputTxt: {
    fontSize: moderateScale(18),
    marginBottom: verticalScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  txtInput: {
    width: '100%',
    height: verticalScale(110),
    borderRadius: moderateScale(8),
    paddingLeft: horizontalScale(10),
    borderWidth: moderateScale(1),
    textAlignVertical: 'top',
    borderColor: 'rgba(10, 73, 117, 0.37)',
  },

  helpTxt: {
    fontSize: moderateScale(16),
    color: '#00000073',
    fontFamily: 'Nunito-Regular',
  },
});
