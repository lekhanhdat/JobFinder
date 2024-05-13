import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import COLORS from "./constants/colors";
import { FontAwesome } from '@expo/vector-icons';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import MainApp from './screens/MainApp';
import Signup from './screens/Signup';
import ConfirmEmail from './screens/ConfirmEmail';
import ConfirmCode from './screens/ConfirmCode';
import ConfirmPassword from './screens/ConfirmPassword';
import FAQ from './screens/FAQ';
import MyApplied from './screens/MyApplied';



enableScreens();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const WelcomeStack = () => (
  <Stack.Navigator 
    initialRouteName="Welcome"
    screenOptions={() => ({headerShown:false})}>
    <Stack.Screen name="WelcomeStack" component={Welcome} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="MainApp" component={MainApp} />
    <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
    <Stack.Screen name="ConfirmCode" component={ConfirmCode} />
    <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
    <Stack.Screen name="FAQ" component={FAQ} />
    <Stack.Screen name="MyApplied" component={MyApplied} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeStack} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
