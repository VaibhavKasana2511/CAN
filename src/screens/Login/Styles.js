import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/Metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'blue',
    // padding: 20,
  },

  loginContainer: {
    marginTop: '-12%',
    margin: 20,
    padding: 20,
    // flex: 0.4,
    height: 361,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
    shadowColor: '#00000040',
    // shadowOffset: {width: -2, height: 4},
    // shadowOpacity: 0.2,
    elevation: 20,
    shadowRadius: 3,
  },
  titleLogin: {
    fontSize: 30,
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },
  inputHeading: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    color: '#000000A8',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#0A49755E',
    borderRadius: 8,
    paddingLeft: 10,
    marginTop: 5,
  },
  passwordContainer: {
    borderWidth: 1,
    borderColor: '#0A49755E',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  eyeLogo: {
    margin: 15,
    marginRight: 15,
    // height: 19.5,
    // width: 17.5,
  },
  resetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  forgotPassword: {
    fontSize: 14,
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
  },

  loginButton: {
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    // height: 40,
    paddingVertical: 10,
    marginTop: 5,
  },
  loginText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
});

export default styles;
