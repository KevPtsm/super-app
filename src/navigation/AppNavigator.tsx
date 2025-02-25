import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import FriendsScreen from '../screens/FriendsScreen';
import StreaksScreen from '../screens/StreaksScreen';
import MissionsScreen from '../screens/MissionsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
                <Stack.Screen name="Friends" component={FriendsScreen} />
                <Stack.Screen name="Streaks" component={StreaksScreen} />
                <Stack.Screen name="Missions" component={MissionsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;