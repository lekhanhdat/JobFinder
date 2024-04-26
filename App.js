import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome, Profile } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Profile'
      >
        <Stack.Screen name="Welcome" component={Welcome}
          options={{ 
            headerShown: false 
          }}
        />
        <Stack.Screen name="Login" component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Signup" component={Signup}
          options={{
            headerShown: false
          }}
        />
        
        {/* Giờ trong ni mình tạo một cái StachScreen mới  */}
        <Stack.Screen name="Profile" component={Profile}
          options={{
            headerShown: false
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}