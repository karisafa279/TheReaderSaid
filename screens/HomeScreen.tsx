import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuthentication } from "../utilities/hooks/useAuthentication";
import { Input, Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { StackScreenProps } from "@react-navigation/stack";
import Icon  from "react-native-vector-icons/FontAwesome";

const auth = getAuth();

const HomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
    const { user } = useAuthentication();

    return (
        <View style={styles.container}>
            <Text>Welcome {user?.email}</Text>
            <Button 
            title="Sign Out" 
            style={styles.button} 
            onPress={() => signOut(auth)}/>
            <Button 
            title="Perfil" 
            style={styles.button} 
            onPress={() => navigation.navigate('Profile')}/>
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

export default HomeScreen;