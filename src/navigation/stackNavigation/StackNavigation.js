import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login/Login';
import Register from '../../screens/Register/Register';
import ResetPassword from '../../screens/ResetPassword/ResetPassword';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
