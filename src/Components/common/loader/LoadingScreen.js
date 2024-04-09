// import {useEffect, useRef} from 'react';
// import React from 'react';
// import {IMAGES} from '@assets/images';
// import {
//   View,
//   Image,
//   StyleSheet,
//   Animated,
//   Easing,
//   Text,
//   Modal,
// } from 'react-native';

// const LoadingScreen = ({visible}) => {
//   const rotateValue = useRef(new Animated.Value(0)).current;
//   useEffect(() => {
//     const rotationSequence = () => {
//       Animated.loop(
//         Animated.timing(rotateValue, {
//           toValue: 1,
//           duration: 2000,
//           useNativeDriver: true,
//           easing: Easing.linear,
//         }),
//       ).start();
//     };
//     rotationSequence();
//   }, [rotateValue]);

//   const rotateInterpolate = rotateValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   return (
//     <View style={styles.container}>
//       {/* <View
//         style={{
//           backgroundColor: 'rgba(0,0,0,0.09)',
//           width: '100%',
//           justifyContent: 'center',
//           alignItems: 'center',
//           // flex: 0.2,
//           padding: 20,
//           borderRadius: 10,
//         }}> */}
//       <Animated.Image
//         source={IMAGES.logo}
//         style={[styles.icon, {transform: [{rotate: rotateInterpolate}]}]}
//       />
//       {/* <Text style={styles.textLoading}>Loading...</Text> */}
//       {/* </View> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.4)', // adjust background color as needed
//   },
//   icon: {
//     width: 60, // adjust size as needed
//     height: 60, // adjust size as needed
//     borderRadius: 20,
//   },
//   textLoading: {
//     fontSize: 14,
//     color: 'white',
//     marginTop: 5,
//     textAlign: 'center',
//     fontFamily: 'Poppins-Medium',
//   },
// });

// export default LoadingScreen;

import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, Easing, Image} from 'react-native';
import {IMAGES} from '@assets/images'; // Assuming IMAGES object holds your image assets

const LoadingScreen = ({visible}) => {
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const moveRight = Animated.timing(animationValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const moveLeft = Animated.timing(animationValue, {
      toValue: 0,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const startAnimation = () => {
      Animated.sequence([moveRight, moveLeft]).start(startAnimation);
    };

    startAnimation();
  }, [animationValue]);

  const translateX = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 100], // Adjust the range based on your desired width of movement
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      {/* Displaying the animated image */}
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.09)',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 0.15,
          borderRadius: 10,
        }}>
        <Animated.Image
          source={IMAGES.logo}
          style={[styles.icon, {transform: [{translateX}]}]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // adjust background color as needed
  },
  icon: {
    width: 60, // adjust size as needed
    height: 60, // adjust size as needed
    borderRadius: 20,
  },
});

export default LoadingScreen;
