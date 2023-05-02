import React from 'react'; 
import { View, StyleSheet, Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AudioList from '../screens/AudioList';
import Player from '../screens/Player';
import PlayList from '../screens/PlayerList';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'


const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return <Tab.Navigator>
        <Tab.Screen name='AudioList' component={AudioList} options={{
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="headset" size={size} color={color} />
                ),
        }}/>

        <Tab.Screen name='Player' component={Player} options={{
            tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="compact-disc" size={size} color={color} />
            ),
        }}/>

        <Tab.Screen name='PlayList' component={PlayList} options={{
            tabBarIcon: ({color, size}) => (
            <MaterialIcons name="library-music" size={size} color={color} />
            ),
        }}/>
    </Tab.Navigator>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AppNavigator;