import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput, Card, Button, RadioButton } from 'react-native-paper';

export default props => {
    return (
        <ScrollView containerstyle={estilos.container}>
            <View style={estilos.container}>
                <Card.Content style={estilos.Cardss}>
                    <Text style={{ marginTop: 15, marginBottom: 5 }}>Nome completo</Text>
                    <TextInput style={{ backgroundColor: "#a2b5d6" }} placeholder="Digite o nome completo" />
                    <Text style={{ marginTop: 15, marginBottom: 5 }}>CPF</Text>
                    <TextInput style={{ backgroundColor: "#a2b5d6" }} placeholder="Digite a CPF" />
                    <Text style={{ marginTop: 15, marginBottom: 5 }}>Telefone</Text>
                    <TextInput style={{ backgroundColor: "#a2b5d6" }} placeholder="Digite a telefone" />
                    <Text style={{ marginTop: 15, marginBottom: 5 }}>E-mail</Text>
                    <TextInput style={{ backgroundColor: "#a2b5d6" }} placeholder="Digite a e-mail" />
                    <Text style={{ marginTop: 15, marginBottom: 5 }}>Senha</Text>
                    <TextInput style={{ backgroundColor: "#a2b5d6" }} placeholder="Digite a Senha" />
                    <Text style={{ marginTop: 15, marginBottom: 5 }}>Confirme sua senha</Text>
                    <TextInput style={{ backgroundColor: "#a2b5d6" }} placeholder="Confirmar senha" />
                    <View style={estilos.conjuntoBtn}>
                        <RadioButton.Group onValueChange={newValue => console.log("")} >
                            <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", margin: 15 }}>
                                <View>
                                    <Text>Contratante</Text>
                                    <RadioButton value="Contratante" />
                                </View>
                                <View>
                                    <Text>Prestador</Text>
                                    <RadioButton value="Prestador" />
                                </View>
                            </View>
                        </RadioButton.Group>
                    </View>
                </Card.Content>

                <View style={{ alignItems: 'center' }}>
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
    conjuntoBtn: {
        display: 'flex',
        flexDirection: 'row'
    }
});