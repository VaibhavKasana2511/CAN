import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale, moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  registerContainer: {
    marginTop: '-12%',
    margin: moderateScale(20),
    padding: moderateScale(20),
    paddingHorizontal: horizontalScale(25),
    height: verticalScale(750),
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(20),
    shadowColor: '#00000040',
    elevation: moderateScale(20),
    shadowRadius: moderateScale(3),
    justifyContent: 'space-between',
  },
  registerTitle: {
    fontSize: moderateScale(30),
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
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
  eyeLogo: {
    margin: moderateScale(15),
    marginRight: verticalScale(15),
  },
  registerText: {
    color: '#000000',
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-SemiBold',
  },
  haveAccount: {
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(14),
    alignSelf: 'center',
  },
  continueText: {
    color: '#000000',
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-SemiBold',
  },
});
export default styles;
