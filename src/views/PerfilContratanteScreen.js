import { StyleSheet, Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Button, Card } from "react-native-paper"

export default props => {
    return (
        <ScrollView containerstyle={estilos.container}>
            <View>
                <Text style={estilos.titulo}>Seu Perfil</Text>
                <View>
                    <Card.Content>
                        <Card.Cover style={estilos.img} source={{ uri: 'https://media.gazetadopovo.com.br/2023/02/14165901/16x9-shutterstock_1815235466-960x540.jpg' }} />
                        <Text style={estilos.texto} variant="titleLarge">Me chamo Zilda e preciso de um(a) cuidador(a) para me acompanhar enquanto não estou com a minha família</Text>
                    </Card.Content>
                    <View style={{ alignItems: 'center' }}>
                        <Button mode="contained" onPress={() => console.log('Adicionar idoso')} style={estilos.botao}>Adicionar idoso</Button>
                        <Button mode="contained" onPress={() => console.log('Voltar')} style={estilos.botao}>Voltar</Button>
                    </View>
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
        fontSize: 40,
        textAlign: 'center',
        color: 'black'
    },
    img: {
        marginTop: 10,
        marginBottom: 10
    },
    botao: {
        backgroundColor: '#003376',
        margin: 5,
        width: 200,
        alignItems: 'center'
    },
    texto: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 5
    },
});