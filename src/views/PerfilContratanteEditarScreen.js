import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput, Card, Button, RadioButton } from 'react-native-paper';

export default props => {
    return (
        <ScrollView containerstyle={estilos.container}>
            <View>
                <Card.Content>
                    <Text style={{ marginTop: 15, marginBottom: 5 }}>CEP:</Text>
                    <TextInput style={{ backgroundColor: "#a2b5d6" }} placeholder="Digite seu CEP" />
                    <Text style={{ marginTop: 15, marginBottom: 5 }}>Endereço:</Text>
                    <TextInput style={{ backgroundColor: "#a2b5d6" }} placeholder="Digite seu endereço" />
                    <Text style={{ marginTop: 15, marginBottom: 5 }}>Número:</Text>
                    <TextInput style={{ backgroundColor: "#a2b5d6" }} placeholder="Digite o número da residência" />
                    <Text style={{ marginTop: 15, marginBottom: 5 }}>Diabético?</Text>
                    <RadioButton.Group onValueChange={newValue => console.log("")} >
                        <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", margin: 15 }}>
                            <View>
                                <Text>Sim</Text>
                                <RadioButton value="Sim" />
                            </View>
                            <View>
                                <Text>Não</Text>
                                <RadioButton value="Não" />
                            </View>
                        </View>
                    </RadioButton.Group>
                    <Text style={{ marginTop: 15, marginBottom: 5 }}>Remédios</Text>
                    <TextInput style={{ backgroundColor: "#a2b5d6" }} placeholder="Toma algum remédios?" />
                    <Text style={{ marginTop: 15, marginBottom: 5 }}>Restrição alimentar</Text>
                    <TextInput style={{ backgroundColor: "#a2b5d6" }} placeholder="Quais as restrições alimentares" />
                    <Text style={{ marginTop: 15, marginBottom: 5 }}>Atividades</Text>
                    <TextInput style={{ backgroundColor: "#a2b5d6" }} placeholder="Atividades ocupacionais ou necessidade" />
                </Card.Content>
                <View style={{ alignItems: "center", marginTop: 10 }}>
                    <Button mode="contained" onPress={() => console.log('Adicionar')} style={estilos.botao}>Adicionar</Button>
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
        width: 200,
    },
});