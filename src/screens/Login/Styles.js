import {StyleSheet} from 'react-native';

// import {horizontalScale, verticalScale, moderateScale} from '@utils/Metrics';
import {horizontalScale, verticalScale, moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  loginContainer: {
    marginTop: '-12%',
    margin: moderateScale(20),
    padding: moderateScale(25),
    paddingHorizontal: moderateScale(25),
    height: verticalScale(400),
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(20),
    justifyContent: 'space-between',
    shadowColor: '#000000',
    elevation: moderateScale(20),
    shadowRadius: moderateScale(3),
  },

  titleLogin: {
    fontSize: moderateScale(30),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },
  inputHeading: {
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(18),
    color: '#000000A8',
    marginTop: verticalScale(5),
  },
  textInput: {
    borderWidth: moderateScale(1),
    borderColor: '#0A49755E',
    borderRadius: moderateScale(8),
    paddingLeft: horizontalScale(10),
    marginTop: verticalScale(5),
  },
  passwordContainer: {
    borderWidth: moderateScale(1),
    borderColor: '#0A49755E',
    borderRadius: moderateScale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(5),
  },
  eyeLogo: {
    margin: moderateScale(15),
    marginRight: verticalScale(15),
  },
  resetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(7),
  },

  forgotPassword: {
    fontSize: moderateScale(14),
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
  },

  loginButton: {
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(5),
  },
});

export default styles;
