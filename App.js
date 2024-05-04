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



enableScreens();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const WelcomeStack = () => (
  <Stack.Navigator 
    initialRouteName="Welcome"
    screenOptions={() => ({headerShown:false})}>
    <Stack.Screen name="WelcomeStack" component={Welcome} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="MainApp" component={MainApp} />
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
