import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale, moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imgContainer: {
    height: verticalScale(386),
    backgroundColor: '#0A4975',
    borderBottomLeftRadius: horizontalScale(30),
    borderBottomRightRadius: horizontalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetContainer: {
    marginTop: '-12%',
    margin: moderateScale(20),
    padding: moderateScale(25),
    paddingHorizontal: horizontalScale(30),
    height: verticalScale(275),
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(20),
    shadowColor: '#000000',
    elevation: moderateScale(20),
    shadowRadius: moderateScale(3),
  },
  resetHeading: {
    fontSize: moderateScale(30),
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
  },

  inputHeading: {
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(18),
    marginTop: verticalScale(15),
  },
  textInput: {
    borderWidth: moderateScale(1),
    borderColor: '#0A49755E',
    borderRadius: moderateScale(8),
    paddingLeft: horizontalScale(15),
    marginVertical: verticalScale(5),
  },
});

export default styles;
