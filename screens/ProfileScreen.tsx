import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ProfileScreen() {
    return (
        <View>
            <Text>
                Look how many books you have read in this year!
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