import * as React from 'react';
import { StyleSheet, Text, View } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Card } from 'react-native-paper';

export default props => {
    return (
        <ScrollView containerstyle={estilos.container}>
            <View>
                <View>
                    <Text style={estilos.titulo}>Notícias</Text>

                    <Card.Content style={{ marginBottom: 20, marginTop: 10 }}>
                        <Text style={{ marginBottom: 10, color: 'black' }} variant="titleLarge">Preço da insulina despenca</Text>
                        <Card.Cover source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/17186683-seta-vermelha-do-grafico-de-seta-para-baixo-com-o-mapa-do-mundo-em-fundo-vermelho-dinheiro-perdendo-crise-de-acoes-e-conceito-de-financas-vetor.jpg' }} />
                    </Card.Content>

                    <Card.Content style={{ marginBottom: 20 }}>
                        <Text style={{ marginBottom: 10, color: 'black' }} variant="titleLarge">Aceitação e venda de fitoterápicos aumenta no mercado</Text>
                        <Card.Cover source={{ uri: 'https://img.freepik.com/fotos-gratis/arranjo-de-produtos-de-fitoterapia-alto-angulo_23-2149339770.jpg' }} />
                    </Card.Content>
                </View>
                <View style={estilos.espacoColorido}>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={estilos.subtitulo}>Solicite um serviço</Text>
                    <Card.Cover style={{ padding: 1, height: 350, width: "100%", marginTop: 20, marginBottom: 20 }} source={{ uri: 'https://icalendario.br.com/m/imprimir/2024/mensal/junho/calendario-junho-2024_4214_15.png' }} />
                    <Button mode="contained" onPress={() => console.log('Agendar')} style={estilos.botao}>Agendar</Button>
                </View>
                <View style={estilos.espacoColorido}>
                </View>
                <View>
                    <Card.Content style={estilos.cardss}>
                        <Text style={estilos.subtitulo}>Telefones de emergência</Text>
                        <Text style={{ fontSize: 20 }}>Samu: 192</Text>
                        <Text style={{ fontSize: 20 }}>Policia militar: 190</Text>
                        <Text style={{ fontSize: 20 }}>Defesa civil: 199</Text>
                        <Text style={{ fontSize: 20 }}>Corpo de bombeiros: 193</Text>
                    </Card.Content>
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
        color: 'black',
    },
    espacoColorido: {
        backgroundColor: '#003376',
        height: 50,
        marginTop: 40,
        marginBottom: 40
    },
    botao: {
        backgroundColor: '#003376',
        margin: 5,
        width: 200,
        alignItems: 'center'
    },
    conjuntoBtn: {
        display: 'flex',
        flexDirection: 'row'
    },
    subtitulo: {
        fontSize: 25,
        color: "black",
    },
    cardss: {
        margin: 15,
        backgroundColor: '#a2b5d6',
        borderRadius: 10,
        padding: 20,
    }

});