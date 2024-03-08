import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import {IntroSlider} from './src/screens';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
