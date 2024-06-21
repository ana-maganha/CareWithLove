import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput, Card, Button, RadioButton } from 'react-native-paper';

export default props => {
    return (
        <ScrollView containerstyle={estilos.container}>
            <View>
                <Text>Editar Perfil</Text>
                <Card.Content>
                    <Text>CEP:</Text>
                    <TextInput placeholder="Digite seu CEP" />
                    <Text>Endereço:</Text>
                    <TextInput placeholder="Digite seu endereço" />
                    <Text>Número:</Text>
                    <TextInput placeholder="Digite o número da residência" />
                    <Text>Diabético?</Text>
                    <TextInput placeholder="Digite a e-mail" />
                    <Text>Remédios</Text>
                    <TextInput placeholder="Digite a Senha" />
                    <Text>Restrição alimentar</Text>
                    <TextInput placeholder="Confirmar senha" />
                    <Text>Atividades</Text>
                    <TextInput placeholder="Confirmar senha" />
                </Card.Content>
                <Button mode="contained" onPress={() => console.log('Adicionar')}>Adicionar</Button>
                <Button mode="contained" onPress={() => console.log('Voltar')}>Voltar</Button>
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
    botao: {
        backgroundColor: '#003376',
        margin: 5,
        width: 100,
    },
    Cardss: {
        marginTop: 10,
    },
    botaosss: {
        alignItems: 'center'
    },
    conjuntoBtn: {
        display: 'flex',
        flexDirection: 'row'
    }
});