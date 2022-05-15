import React from "react";
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import MyBookScreen from "../screens/MyBookScreen";
import MyBookReviewScreen from "../screens/MyBookReview";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BookReviewStack = () =>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="My Books" component={MyBookScreen} />
        <Stack.Screen name="Book review" component={MyBookReviewScreen} />
    </Stack.Navigator>
    );
}

export default function UserStack() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="All Books" component={BookReviewStack} options={{ headerShown: false }} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
    </NavigationContainer>
    );
}
