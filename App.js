import {View, Text} from 'react-native';
import React from 'react';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import ResetPassword from './src/screens/ResetPassword/ResetPassword';
import HomePage from './src/screens/HomePage/HomePage';
import Header from './src/Components/common/Header/Header';
import Profile from './src/screens/Profile/Profile';
import Referral from './src/screens/Referral/Referral';
import ChangePassword from './src/screens/ChangePassword/ChangePassword';
import Logout from './src/screens/Logout/Logout';
import CustomButtom from './src/Components/common/customButton/CustomButtom';
import AnsQues from './src/screens/Forum/AnsQues/AnsQues';
import Category from './src/screens/Forum/Category/Category';
import Details from './src/screens/Forum/Details/Details';
import HaveQuestions from './src/screens/Forum/HaveQuestions/HaveQuestions';
import Portfolio from './src/screens/Portfolio/Portfolio';
import Chat from './src/screens/Chat/Chat';
import UpcomingEvents from './src/screens/UpcomingEvents/UpcomingEvent';
import StackNavigation from './src/navigation/stackNavigation/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return <StackNavigation />;
};

export default App;
