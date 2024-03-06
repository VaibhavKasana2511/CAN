import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale, moderateScale} from '@utils/Metrics';

export const styles = StyleSheet.create({
  mainContainer: {
    height: moderateScale(60),
    backgroundColor: '#0A4975',
    borderBottomLeftRadius: horizontalScale(30),
    borderBottomRightRadius: horizontalScale(30),
    flexDirection: 'row',
  },
  drawerIcon: {
    height: verticalScale(17),
    width: horizontalScale(30),
    marginLeft: horizontalScale(20),
    marginTop: verticalScale(20),
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  canLogo: {
    height: verticalScale(60),
    width: horizontalScale(125),
    marginRight: horizontalScale(50),
  },
  headerTxt: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'Nunito-Medium',
  },
  txtContainer: {
    flex: 1,
    marginLeft: horizontalScale(20),
    // marginTop: verticalScale(12),
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
