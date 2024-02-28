import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'space-between',
  },
  headingText: {
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
    fontSize: 22,
  },
  contentContainer: {
    padding: 15,
  },
  listContainer: {
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'blue',
    // flex: 0.5,
    marginVertical: 10,
    shadowColor: '#00000040',
    elevation: 20,
    width: '100%',
    height: 156,
    borderRadius: 10,
    justifyContent: 'space-around',
    padding: 10,
  },
  section1: {
    flexDirection: 'row',
  },

  listName: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: '#0A4975',
  },
  listText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#000000A8',
  },

  section2: {
    // marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  section2Heading: {
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
  },
  section2Text: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: '#000000',
  },
  calendarMain: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    // marginVertical: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#00000021',
  },
  calendarContainer: {
    height: 69,
    width: 69,
    borderColor: '#0A4975',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarDate: {
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    color: '#0A4975',
  },
  calendarMonth: {
    fontSize: 16,
    fontFamily: 'Nunito-Medium',
    color: '#0A4975',
  },

  calendarContent: {
    marginLeft: 10,
  },
  eventHeading: {
    fontSize: 16,
    fontFamily: 'Nunito-Medium',
    color: '#000000',
    textDecorationLine: 'underline',
  },
  agendaText: {
    fontSize: 16,
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },
});
