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

  heading: {
    fontSize: moderateScale(22),
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Nunito-SemiBold',
  },

  selectDateContainer: {
    marginVertical: verticalScale(10),
  },

  subContainerText: {
    padding: moderateScale(10),
    fontSize: moderateScale(16),
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },

  itemsContainer: {
    marginBottom: verticalScale(10),
    borderBottomWidth: moderateScale(0.2),
    backgroundColor: '#FFFFFF',
  },

  topicTxt: {
    fontSize: moderateScale(16),
    marginBottom: verticalScale(5),
    color: 'rgba(10, 73, 117, 1)',
    fontFamily: 'Nunito-SemiBold',
  },

  items: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  typeTxt: {
    fontSize: moderateScale(16),
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Nunito-Medium',
  },

  imgTxt: {
    fontSize: moderateScale(14),
    marginLeft: verticalScale(10),
    color: 'rgba(0, 0, 0, 0.66)',
    fontFamily: 'Nunito-Regular',
  },

  subContainerAgenda: {
    fontSize: moderateScale(14),
    marginTop: verticalScale(5),
    color: 'rgba(0,0,0,0.66)',
    fontFamily: 'Nunito-Regular',
  },

  subContainerMeetingText: {
    fontSize: moderateScale(14),
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Nunito-Medium',
  },

  subContainerUrl: {
    fontSize: moderateScale(14),
    color: 'rgba(0, 10, 255, 0.66)',
    fontFamily: 'Nunito-Regular',
  },

  selectDateText: {
    fontSize: moderateScale(18),
    fontFamily: 'Nunito-Regular',
    color: 'rgba(0, 0, 0, 0.66)',
  },

  pdfTxt: {
    fontSize: moderateScale(14),
    marginTop: verticalScale(5),
    color: '#000000',
    marginBottom: verticalScale(10),
    fontFamily: 'Nunito-Medium',
  },
});
