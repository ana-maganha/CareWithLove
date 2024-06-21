import * as React from 'react';
import { Text, View } from "react-native"
import { Button, Card } from 'react-native-paper';

export default props => {
    return (
        <View>
            <View>
                <Text>Noticias</Text>

                <Card.Content>
                    <Text variant="titleLarge">Preço da insulina despenca</Text>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                </Card.Content>

                <Card.Content>
                    <Text variant="titleLarge">Aceitação e venda de fitoterápicos aumenta no mercado</Text>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                </Card.Content>
            </View>
            <View>
            </View>
            <View>
                <Text>Solicite um serviço</Text>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Button icon="camera" mode="contained" onPress={() => console.log('Agendar')}>Agendar</Button>
            </View>
            <View>
            </View>
            <View>
                <Text>Telefones de emergência</Text>
                <Card.Content>
                    <Text>Samu: 192</Text>
                    <Text>Policia militar: 190</Text>
                    <Text>Defesa civil: 199</Text>
                    <Text>Corpo de bombeiros: 193</Text>
                </Card.Content>
            </View>

        </View>
    )
}