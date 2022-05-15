import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useAuthentication } from "../utilities/hooks/useAuthentication";
import { Input, Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { StackScreenProps } from "@react-navigation/stack";
import Icon  from "react-native-vector-icons/FontAwesome";

const auth = getAuth();

const MyBookScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
    const { user } = useAuthentication();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Books you read:</Text>
            <View style={{flexDirection: 'row'}}>
                <Image
                source={require('../images/HarryPotter1.jpg')}
                style={{width: 200, height: 200, margin: 2}} />
                <Image
                source={require('../images/ELCodigoDaVinci.png')}
                style={{width: 200, height: 200, margin: 2}} />
                <Image
                source={require('../images/ComerRezarAmar.jpg')}
                style={{width: 200, height: 200, margin: 2}} />
            </View>
            <Text style={styles.title}>Books you are reading:</Text>
            <View style={{flexDirection: 'row'}}>
                <Image
                source={require('../images/CronicasDeNarnia.jpg')}
                style={{width: 200, height: 200, margin: 2}} />
                <Image
                source={require('../images/MasAllaDelInvierno.jpg')}
                style={{width: 200, height: 200, margin: 2}} />
                <Image
                source={require('../images/IT.jpg')}
                style={{width: 200, height: 200, margin: 2}} />
            </View>
            <Button 
            title="Sign Out" 
            style={styles.button} 
            onPress={() => signOut(auth)}/>
            <Button 
            title="Book review" 
            style={styles.button} 
            onPress={() => navigation.navigate('Book review')}/>
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
    title:{
        fontSize: 20,
        textAlign:'left',
    }
});

export default MyBookScreen;