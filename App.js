import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import COLORS from "./constants/colors";
import { FontAwesome } from '@expo/vector-icons';

import SearchPage from "./screens/SearchPage"
import SavedJob from "./screens/SavedJob";
import HomePage from "./screens/HomePage";
import Annoucement from "./screens/Annoucement";
import Profile from "./screens/Profile";

enableScreens();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
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
            } else if (route.name === 'Annoucement') {
              iconName = focused ? 'bell' : 'bell';
            }
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: COLORS.maugach, // Màu sắc khi tab được chọn
          inactiveTintColor: 'gray', // Màu sắc khi tab không được chọn
        }}>
        <Tab.Screen name="Search" component={SearchPage} />
        <Tab.Screen name="Saved Job" component={SavedJob} />
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Annoucement" component={Annoucement} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
