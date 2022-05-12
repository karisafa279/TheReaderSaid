import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MyBookReviewScreen() {
    return (
        <View>
            <Text>
                MyBook review screen!
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

