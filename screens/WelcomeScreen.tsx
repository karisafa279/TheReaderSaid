import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Button } from "react-native-elements";

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style= {styles.title}>Welcome{"\n"}TheReaderSaid</Text>

            <View style={styles.buttons}>
                <Button 
                title="Sign In" 
                buttonStyle={styles.button}
                onPress={() => navigation.navigate('Sign In')}/>
                <Button 
                title="Sign Up" 
                type="outline"
                buttonStyle={styles.button}
                onPress={() => navigation.navigate('Sign Up')}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        //flex: 1,
        marginTop:50,
    },
    button: {
        marginTop: 20,
    },
    title: {
        fontSize: 30,
        textAlign:'center',
    }
});

export default WelcomeScreen;