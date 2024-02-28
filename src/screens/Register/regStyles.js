import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  registerContainer: {
    marginTop: '-12%',
    margin: 20,
    padding: 20,
    paddingHorizontal: 25,
    height: 750,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#00000040',
    elevation: 20,
    shadowRadius: 3,
    justifyContent: 'space-between',
  },
  registerTitle: {
    fontSize: 30,
    fontFamily: 'Nunito-SemiBold',
    // textAlign: 'center',
    color: '#000000',
  },
  inputHeading: {
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#0A49755E',
    borderRadius: 8,
    paddingLeft: 15,
    marginTop: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#0A49755E',
    borderRadius: 8,
    marginTop: 5,
  },
  eyeLogo: {
    margin: 15,
    marginRight: 15,
  },
  registerText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
  haveAccount: {
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    alignSelf: 'center',
  },
  continueText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
});
export default styles;
