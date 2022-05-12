import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuthentication } from "../utilities/hooks/useAuthentication";
import { Input, Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

export default function MyBookScreen() {
    const { user } = useAuthentication();

    return (
        <View style={styles.container}>
            <Text>Welcome {user?.email}</Text>
            <Button 
            title="Sign Out" 
            style={styles.button} 
            onPress={() => signOut(auth)}/>
            <View>
                <Button 
                title="Home" 
                style={styles.button}/>
                <Button 
                title="My Books" 
                style={styles.button}/>
                <Button 
                title="Search" 
                style={styles.button}/>
                <Button 
                title="Profile" 
                style={styles.button}/>
            </View>
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
    button:{
        marginTop: 5,
    },
});