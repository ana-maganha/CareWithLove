import { StyleSheet, Text, View } from "react-native";
import { TextInput, Card, Button, RadioButton } from 'react-native-paper';

export default props => {
    return (
        <View style={estilos.container}>
            <Card.Content>
                <Text>Nome completo</Text>
                <TextInput placeholder="Digite o nome completo" />
                <Text>CPF</Text>
                <TextInput placeholder="Digite a CPF" />
                <Text>Telefone</Text>
                <TextInput placeholder="Digite a telefone" />
                <Text>E-mail</Text>
                <TextInput placeholder="Digite a e-mail" />
                <Text>Senha</Text>
                <TextInput placeholder="Digite a Senha" />
                <Text>Confirme sua senha</Text>
                <TextInput placeholder="Confirmar senha" />
                <View style={estilos.conjuntoBtn}>
                    <RadioButton.Group onValueChange={newValue => console.log("")}>
                        <Text>Contratante</Text>
                        <RadioButton value="Contratante" />
                        <Text>Prestador</Text>
                        <RadioButton value="Prestador" />
                    </RadioButton.Group>
                </View>
            </Card.Content>

            <Button icon="camera" mode="contained" onPress={() => console.log('Entrar')} style={estilos.botao}>Entrar</Button>
            <Button icon="camera" mode="contained" onPress={() => console.log('Voltar')} style={estilos.botao}>Voltar</Button>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#ecf0f1'
    },
    botao: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    conjuntoBtn: {
        display: 'flex',
        flexDirection: 'row'
    },

});