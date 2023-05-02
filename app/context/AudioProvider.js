import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import * as MediaLibrary from 'expo-media-library';

export class AudioProvider extends Component {

    // {
    //     "canAskAgain" : true,
    //     "expires": "never",
    //     "granted": false,
    //     "status": "undertemided",
    // }

    constructor(props) {
        super(props)
    }

    getPermission = async () => {
        const permission = await MediaLibrary.getPermissionsAsync()
        console.log(permission)
    }

    compoentDidMount() {
        getPermission()
    }

    render() {
        return (
            <View>
                <Text> textInComponent</Text>
            </View>

        )
    }
}



export default AudioProvider;