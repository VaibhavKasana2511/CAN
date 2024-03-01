import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale, moderateScale} from '@utils/Metrics';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headingText: {
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
    fontSize: moderateScale(22),
    marginBottom: verticalScale(10),
  },
  contentContainer: {
    padding: moderateScale(20),
  },
  listContainer: {
    backgroundColor: '#FFFFFF',
    marginVertical: verticalScale(10),
    // shadowColor: '#00000040',
    elevation: moderateScale(5),
    width: '98%',
    height: verticalScale(156),
    borderRadius: moderateScale(10),
    justifyContent: 'space-around',
    padding: moderateScale(15),
  },
  section1: {
    flexDirection: 'row',
  },

  listName: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(20),
    color: '#0A4975',
  },
  listText: {
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(16),
    color: '#000000A8',
  },

  section2: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  section2Heading: {
    fontSize: moderateScale(14),
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
    marginTop: verticalScale(5),
  },
  section2Text: {
    fontSize: moderateScale(14),
    fontFamily: 'Nunito-Regular',
    color: '#000000',
  },
  calendarMain: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: moderateScale(10),
    borderBottomWidth: moderateScale(1),
    borderColor: '#00000021',
  },
  calendarContainer: {
    height: moderateScale(69),
    width: moderateScale(69),
    borderColor: '#0A4975',
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarDate: {
    fontSize: moderateScale(20),
    fontFamily: 'Nunito-Bold',
    color: '#0A4975',
  },
  calendarMonth: {
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-Medium',
    color: '#0A4975',
  },

  calendarContent: {
    marginLeft: horizontalScale(10),
  },
  eventHeading: {
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-Medium',
    color: '#000000',
    textDecorationLine: 'underline',
  },
  agendaText: {
    fontSize: moderateScale(16),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
    marginTop: verticalScale(5),
  },
});
