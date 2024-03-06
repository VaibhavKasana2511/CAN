import {StyleSheet} from 'react-native';
import {verticalScale, moderateScale, horizontalScale} from '@utils/Metrics';

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
    color: '#000000',
    marginBottom: verticalScale(10),
    fontFamily: 'Nunito-SemiBold',
  },

  dataContainer: {
    padding: moderateScale(15),
    elevation: moderateScale(5),
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(10),
    borderWidth: moderateScale(0.4),
    shadowColor: '#000000',
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(0, 0, 0, 0.25)',
  },

  ques: {
    fontSize: moderateScale(20),
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },

  addAns: {
    fontSize: moderateScale(16),
    paddingTop: verticalScale(10),
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'underline',
  },

  ans: {
    fontSize: moderateScale(16),
    paddingTop: verticalScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  queryContainer: {
    marginTop: verticalScale(30),
  },

  query: {
    fontSize: moderateScale(16),
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
  },
});
