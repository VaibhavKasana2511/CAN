import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subContainer: {
    // backgroundColor: 'red',
    padding: 15,
    justifyContent: 'space-between',
  },
  headingText: {
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
    fontSize: 22,
  },
  accountImage: {
    width: 90,
    height: 90,
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
  allTextInput: {
    marginTop: 10,
  },
  updateButton: {
    marginTop: '7%',
  },
});
