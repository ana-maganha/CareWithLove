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
                <Drawer.Screen name="Home" component={HomeContratanteScreen} />
                <Drawer.Screen name="Agendamento" component={AgendamentoScreen} />
                <Drawer.Screen name="Conta" component={ContaScreen} />
                <Drawer.Screen name="Login" component={LoginScreen} />
                <Drawer.Screen name="Perfil" component={PerfilContratanteScreen} />
                <Drawer.Screen name="EditarPerfil" component={PerfilContratanteEditarScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;