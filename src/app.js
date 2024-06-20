
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

function AgendamentoScreen() {
    return(
        <Text>Feed</Text>
    )
}

function ContaScreen() {
    return(
        <Text>Feed</Text>
    )
}

function HomeContratanteScreen() {
    return(
        <Text>Article</Text>
    )
}

function LoginScreen() {
    return(
        <Text>Article</Text>
    )
}

function PerfilContratanteScreen() {
    return(
        <Text>Article</Text>
    )
}

const Drawer = createDrawerNavigator();

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Agendamentos" component={AgendamentoScreen} />
                <Drawer.Screen name="Conta" component={ContaScreen} />
                <Drawer.Screen name="Home" component={HomeContratanteScreen} />
                <Drawer.Screen name="Login" component={LoginScreen} />
                <Drawer.Screen name="Perfil" component={PerfilContratanteScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;