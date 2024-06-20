import React from "react";
import { View, Text } from "react-native";
import { Button, Card, TextInput} from "react-native-paper";

export default props => {
    return (
        <View>
            <Card.Content>
                <Text>Login</Text>
                <Text>usuário</Text>
                <TextInput placeholder="Digite o usuário"/>
                <Text>Senha</Text>
                <TextInput placeholder="Digite a senha" />
            </Card.Content>
            <Button icon="camera" mode="contained" onPress={() => console.log('Agendamento')}>Entrar</Button>
            <Button icon="camera" mode="contained" onPress={() => console.log('Agendamento')}>Criar Conta</Button>
        </View>
    )
}