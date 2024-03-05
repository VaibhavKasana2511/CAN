import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  slideBackground: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10%',
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    fontSize: moderateScale(24),
  },
  rightArrow: {
    alignSelf: 'flex-end',
    marginBottom: verticalScale(20),
    marginRight: horizontalScale(20),
  },
  activeDot: {
    backgroundColor: '#FFBD59',
  },
});

export default styles;
