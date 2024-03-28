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
    marginBottom: horizontalScale(10),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  Image: {
    height: verticalScale(75),
    width: horizontalScale(85),
    borderRadius: moderateScale(5),
  },

  valuationSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(2),
  },

  amountSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
  },

  itemData: {
    padding: moderateScale(15),
    elevation: moderateScale(5),
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(10),
    borderWidth: moderateScale(0.4),
    shadowColor: '#000000',
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(0, 0, 0, 0.25)',
  },

  name: {
    fontSize: moderateScale(20),
    marginLeft: verticalScale(10),
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },

  text: {
    fontSize: moderateScale(16),
    marginLeft: verticalScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  details: {
    fontSize: moderateScale(14),
    color: '#000000C4',
    fontFamily: 'Nunito-Regular',
  },

  txt: {
    fontSize: moderateScale(14),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },
});
