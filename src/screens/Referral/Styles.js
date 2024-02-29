import {StyleSheet, Text, View} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subContainer: {paddingHorizontal: 15},
  headingText: {
    fontFamily: 'Nunito-Regular',
    color: '#000000',
    fontSize: 20,
    marginTop: 15,
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
  allTextInput: {
    marginTop: 10,
  },
  updateButton: {
    marginTop: '7%',
  },
  listSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listName: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
    color: '#0A4975',
    // marginTop: 5,
  },
  listMail: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#00000080',
  },
  Icon: {
    marginTop: 3,
    marginRight: 7,
    resizeMode: 'contain',
  },
  phoneIcon: {
    marginTop: 3,
    height: 14,
    width: 14,
    marginRight: 7,
    resizeMode: 'contain',
  },
  mailIcon: {
    marginTop: 6,
    marginRight: 7,
    resizeMode: 'contain',
  },
  listContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    elevation: 20,
    shadowColor: '#00000040',
  },
});
