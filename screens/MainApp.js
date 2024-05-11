import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import COLORS from "../constants/colors";
import { FontAwesome } from '@expo/vector-icons';
import SearchPage from "./SearchPage";
import SavedJob from "./SavedJob";
import HomePage from "./HomePage";
import Profile from "./Profile";
import EmptyNotify from './EmptyNotify';
import PersonalData from './PersonalData';
import ResumeAndInfo from './ResumeAndInfo';
import Settings from './Settings';
import AddExperience from './AddExperience';
import ChangeExperience from './ChangeExperience';
import FAQ from './FAQ';
import Policy from './PrivacyPolicy';
import DescribeJob from './DescribeJob';


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
    <Stack.Screen name="AddExperience" component={AddExperience} />
    <Stack.Screen name="ChangeExperience" component={ChangeExperience} />
    <Stack.Screen name="FAQ" component={FAQ} />
    <Stack.Screen name="Policy" component={Policy} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={() => ({headerShown:false})}>
    <Stack.Screen name="HomeDetails" component={HomePage} />
    <Stack.Screen name="DescribeJob" component={DescribeJob} />
  </Stack.Navigator>
);

const MainApp = () => {
  return (
    <NavigationContainer independent={true}>
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
            } else if (route.name === 'Favorite') {
              iconName = focused ? 'heart' : 'heart';
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
        <Tab.Screen name="Favorite" component={SavedJob} />
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Notify" component={EmptyNotify} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
