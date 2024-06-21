import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Card, TextInput } from "react-native-paper";

export default props => {
    return (
        <ScrollView containerstyle={estilos.container}>
            <View>
                <Card.Content>
                    <Text style={{marginTop: 15, marginBottom: 5}}>Usuário</Text>
                    <TextInput placeholder="Digite o usuário" />
                    <Text style={{marginTop: 15, marginBottom: 5}}>Senha</Text>
                    <TextInput placeholder="Digite a senha" />
                </Card.Content>
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Button mode="contained" onPress={() => console.log('Entrar')} style={estilos.botao}>Entrar</Button>
                    <Button mode="contained" onPress={() => console.log('Criar Conta')} style={estilos.botao}>Criar Conta</Button>
                </View>
            </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#ecf0f1'
    },
    titulo: {
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },
    botao: {
        backgroundColor: '#003376',
        margin: 5,
        width: 200,
        alignItems: 'center'
    }
});