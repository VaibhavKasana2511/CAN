import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale, moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imgContainer: {
    height: verticalScale(310),
    backgroundColor: '#0A4975',
    borderBottomLeftRadius: horizontalScale(30),
    borderBottomRightRadius: horizontalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetContainer: {
    marginTop: '-12%',
    margin: moderateScale(20),
    padding: moderateScale(20),
    paddingHorizontal: horizontalScale(25),
    height: verticalScale(270),
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(20),
    shadowColor: '#00000040',
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
    marginTop: verticalScale(5),
  },
  cancelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetButton: {
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(20),
    width: '45%',
  },
  resetText: {
    color: '#000000',
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-SemiBold',
  },
  cancelButton: {
    backgroundColor: '#00000040',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 20,
    width: '45%',
  },
});

export default styles;
