import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SearchScreen() {
    return (
        <View>
            <Text>
                We recommend you these books!
            </Text>
        </View>
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