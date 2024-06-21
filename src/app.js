import * as React from 'react';
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AgendamentoScreen from "./views/AgendamentoScreen"
import ContaScreen from "./views/ContaScreen"
import HomeContratanteScreen from "./views/HomeContratanteScreen"
import LoginScreen from "./views/LoginScreen"
import PerfilContratanteScreen from "./views/PerfilContratanteScreen"
import PerfilContratanteEditarScreen from "./views/PerfilContratanteEditarScreen"


const Drawer = createDrawerNavigator();

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeContratanteScreen} options={{
                    headerStyle: {
                        backgroundColor: "#003376",
                        height: 146,

                    },
                    headerTitleStyle : {
                        color: 'white',
                        marginBottom: 'auto',
                        paddingTop: 20
                    }

                }} />
                <Drawer.Screen name="Agendamento" component={AgendamentoScreen} options={{
                    headerStyle: {
                        backgroundColor: "#003376",
                        height: 146
                    },
                    headerTitleStyle : {
                        color: 'white',
                        marginBottom: 'auto',
                        paddingTop: 20
                    }
                }} />
                <Drawer.Screen name="Conta" component={ContaScreen} options={{
                    headerStyle: {
                        backgroundColor: "#003376",
                        height: 146
                    },
                    headerTitleStyle : {
                        color: 'white',
                        marginBottom: 'auto',
                        paddingTop: 20
                    }
                }} />
                <Drawer.Screen name="Login" component={LoginScreen} options={{
                    headerStyle: {
                        backgroundColor: "#003376",
                        height: 146
                    },
                    headerTitleStyle : {
                        color: 'white',
                        marginBottom: 'auto',
                        paddingTop: 20
                    }
                }} />
                <Drawer.Screen name="Perfil" component={PerfilContratanteScreen} options={{
                    headerStyle: {
                        backgroundColor: "#003376",
                        height: 146
                    },
                    headerTitleStyle : {
                        color: 'white',
                        marginBottom: 'auto',
                        paddingTop: 20
                    }
                }} />
                <Drawer.Screen name="Editar Perfil" component={PerfilContratanteEditarScreen} options={{
                    headerStyle: {
                        backgroundColor: "#003376",
                        height: 146
                    },
                    headerTitleStyle : {
                        color: 'white',
                        marginBottom: 'auto',
                        paddingTop: 20
                    }
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;