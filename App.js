import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import AddNewDataScreen from './AddNewDataScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Login"
                    component={LoginScreen} />

                <Stack.Screen
                    options={{headerTitle: "Fuel Data App", headerBackButtonMenuEnabled: false, headerBackVisible: false}}
                    name="Home"
                    component={HomeScreen} />

                <Stack.Screen
                    options={{headerTitle: "New Data Entry", headerBackVisible: false}}
                    name="AddNewData"
                    component={AddNewDataScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
