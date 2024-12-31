import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './components/Home';
import ContactUs from './components/ContactUs';

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#9370db'},
      }}
      >
      <Stack.Screen name="Home" component={Home}  options={{ title: 'Welcome' }}/>
      <Stack.Screen name="ContactUs" component={ContactUs}  options={{ title: 'Contact Us' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>

  );
}
