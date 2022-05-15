import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function MyBookReviewScreen() {
    return (
        <View>
            <Text style={styles.title}>
                Congratulations, you complete the book.{"\n"} Let us know your review!
            </Text>
            <Image
                source={require('../images/ELCodigoDaVinci.png')}
                style={{width: 200, height: 200, margin: 2}} />
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
    title: {
        fontSize: 20,
        textAlign:'center',
    }
});

