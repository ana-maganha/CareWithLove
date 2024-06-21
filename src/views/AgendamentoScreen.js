import { Text, View } from "react-native"
import { Button, Card } from "react-native-paper"

export default props => {
    return (
        <View>
            <Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Text variant="titleLarge">Selecione o período</Text>
            </Card.Content>
            <View>
                <Text> Escolha um profissional:</Text>
                <View>
                    <Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Text variant="titleLarge">Selecione o período</Text>
                    </Card.Content>
                    <Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Text variant="titleLarge">Selecione o período</Text>
                    </Card.Content>
                </View>
                <View>
                    <Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Text variant="titleLarge">Selecione o período</Text>
                    </Card.Content>
                    <Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Text variant="titleLarge">Selecione o período</Text>
                    </Card.Content>
                </View>
                <View>
                    <Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Text variant="titleLarge">Selecione o período</Text>
                    </Card.Content>
                    <Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Text variant="titleLarge">Selecione o período</Text>
                    </Card.Content>
                </View>
                <Button icon="camera" mode="contained" onPress={() => console.log('Solicitar')}>Solicitar</Button>
            </View>
        </View>
    )
}