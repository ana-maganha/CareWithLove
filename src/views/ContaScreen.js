import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput, Card, Button, RadioButton } from 'react-native-paper';

export default props => {
    return (
        <ScrollView containerstyle={estilos.container}>
            <View style={estilos.container}>
                <Card.Content style={estilos.Cardss}>
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
                        <RadioButton.Group onValueChange={newValue => console.log("")} >
                            <View style={{flexDirection: "row", justifyContent: "space-around", width: "100%"}}>
                                <View style={{width: '25%'}}>
                                    <Text>Contratante</Text>
                                    <RadioButton value="Contratante" />
                                </View>
                                <View style={{width: '25%'}}>
                                    <Text>Prestador</Text>
                                    <RadioButton value="Prestador" />
                                </View>
                            </View>
                        </RadioButton.Group>
                    </View>
                </Card.Content>

                <View style={estilos.botoes}>
                    <Button mode="contained" onPress={() => console.log('Entrar')} style={estilos.botao}>Entrar</Button>
                    <Button mode="contained" onPress={() => console.log('Voltar')} style={estilos.botao}>Voltar</Button>
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
    botao: {
        backgroundColor: '#003376',
        margin: 5,
        width: 100,
    },
    Cardss: {
        marginTop: 10,
    },
    botoes: {
        alignItems: 'center'
    },
    conjuntoBtn: {
        display: 'flex',
        flexDirection: 'row'
    }
});