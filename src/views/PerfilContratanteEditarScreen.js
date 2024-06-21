import { Text, View } from "react-native";
import { TextInput, Card, Button, RadioButton } from 'react-native-paper';

export default props => {
    return (
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
            <Button icon="camera" mode="contained" onPress={() => console.log('Adicionar')}>Adicionar</Button>
            <Button icon="camera" mode="contained" onPress={() => console.log('Voltar')}>Voltar</Button>
        </View>
    )
}