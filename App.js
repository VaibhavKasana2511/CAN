import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import {IntroSlider} from './src/screens';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store/configureStore';
import {useFetchStatesQuery} from './src/redux/service/authService';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
