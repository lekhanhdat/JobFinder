import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import COLORS from "./constants/colors";
import { FontAwesome } from '@expo/vector-icons';
import SearchPage from "./screens/SearchPage"
import SavedJob from "./screens/SavedJob";
import HomePage from "./screens/HomePage";
import Profile from "./screens/Profile";
import EmptyNotify from './screens/EmptyNotify';
import PersonalData from './screens/PersonalData';
import ResumeAndInfo from './screens/ResumeAndInfo';
import Settings from './screens/Settings';

enableScreens();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator 
    initialRouteName="Profile"
    screenOptions={() => ({headerShown:false})}>
    <Stack.Screen name="ProfileDetails" component={Profile} />
    <Stack.Screen name="PersonalData" component={PersonalData} />
    <Stack.Screen name="ResumeAndInfo" component={ResumeAndInfo} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: COLORS.maugach,
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [
            {
              "display": "flex"
            },
            null
          ],
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Saved Job') {
              iconName = focused ? 'list' : 'list';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search';
            } else if (route.name === 'Notify') {
              iconName = focused ? 'bell' : 'bell';
            }
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}>

        <Tab.Screen name="Search" component={SearchPage} />
        <Tab.Screen name="Saved Job" component={SavedJob} />
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Notify" component={EmptyNotify} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
