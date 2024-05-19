import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import Login from "./screens/Login";
import HomePage from "./screens/HomePage";

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="SplashScreen">
				<Stack.Screen
					name="SplashScreen"
					component={SplashScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="HomePage"
					component={HomePage}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
