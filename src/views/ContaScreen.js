import { Text, View } from "react-native";
import { TextInput, Card, Button } from 'react-native-paper';

export default props => {
    return(
        <View>
            <Card.Content>
                <Text>Nome completo</Text>
                <TextInput placeholder="Digite o nome completo"/>
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
            </Card.Content>
            <Button icon="camera" mode="contained" onPress={() => console.log('Agendamento')}>Entrar</Button>
            <Button icon="camera" mode="contained" onPress={() => console.log('Agendamento')}>Criar Conta</Button>
        </View>
    )
}