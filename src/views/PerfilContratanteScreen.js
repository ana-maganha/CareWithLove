import { StyleSheet, Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Button, Card } from "react-native-paper"

export default props => {
    return (
        <ScrollView containerstyle={estilos.container}>
            <View>
                <Text>Seu Perfil</Text>
                <View>
                    <Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Text variant="titleLarge">Selecione o período</Text>
                    </Card.Content>
                    <Button mode="contained" onPress={() => console.log('Adicionar idoso')}>Adicionar idoso</Button>
                    <Button mode="contained" onPress={() => console.log('Voltar')}>Voltar</Button>
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
    botaosss: {
        alignItems: 'center'
    },
    conjuntoBtn: {
        display: 'flex',
        flexDirection: 'row'
    }
});