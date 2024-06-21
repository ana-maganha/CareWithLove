import { Text, View } from "react-native"
import { Button, Card } from "react-native-paper"

export default props => {
    return (
        <View>
            <Text>Seu Perfil</Text>
            <View>
                <Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Text variant="titleLarge">Selecione o período</Text>
                </Card.Content>
                <Button icon="camera" mode="contained" onPress={() => console.log('Adicionar idoso')}>Adicionar idoso</Button>
                <Button icon="camera" mode="contained" onPress={() => console.log('Voltar')}>Voltar</Button>
            </View>
        </View>
    )
}