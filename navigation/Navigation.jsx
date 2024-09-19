import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import store from "./redux/store";

export default function Navigation() {
    const Stack = createStackNavigator();
    return(
        <Provider store={{store}}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                <Stack.Navigator mode="modal">
                    <Stack.Screen name="index" component={Index}/>
                    <Stack.Screen name="todo" component={ToDoCreate} />
                </Stack.Navigator>
            </NavigationContainer>
            </PersistGate>
        </Provider>
    )
}