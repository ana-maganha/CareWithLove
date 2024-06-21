import { StyleSheet, Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Button, Card } from "react-native-paper"

export default props => {
    return (
        <ScrollView containerstyle={estilos.container}>
            <View>
                <Card.Content style={{width: "95%",}}>
                    <Card.Cover style={{padding: 1, width: "100%"}} source={{ uri: 'https://icalendario.br.com/m/imprimir/2024/mensal/junho/calendario-junho-2024_4214_15.png' }} />
                    <Text>Selecione o(os) dia(as)</Text>
                </Card.Content>

                <View style={estilos.espacoColorido}>
                </View>

                <View style={estilos.perfisssss}>
                    <Text style={estilos.titulo}> Escolha um profissional:</Text>
                    <View style={estilos.perfis}>
                        <Card.Content style={estilos.cardssss}>
                            <Card.Cover source={{ uri: 'https://img.freepik.com/fotos-gratis/retrato-de-um-sorrindo-jovem-executiva-em-escritorio_23-2147838578.jpg?w=996&t=st=1718977523~exp=1718978123~hmac=66669ea9b1ebf7034a85acf1403dd0a00e3b8f6d321fb5b4427abfa5e8d3f536' }} />
                            <Text variant="titleLarge">Selecione o período</Text>
                        </Card.Content>
                        <Card.Content style={estilos.cardssss}>
                            <Card.Cover source={{ uri: 'https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-gerente-de-inicializacao-confiante-no-escritorio-posando-com-confianca-olhando_1258-195338.jpg?w=996&t=st=1718977430~exp=1718978030~hmac=0782bf877944661fc258c2f1fd05c1a3da0743ee7af04ee4706cc02bf07fcad3' }} />
                            <Text variant="titleLarge">Selecione o período</Text>
                        </Card.Content>
                    </View>
                    <View style={estilos.perfis}>
                        <Card.Content style={estilos.cardssss}>
                            <Card.Cover source={{ uri: 'https://img.freepik.com/fotos-gratis/homem-caucasiano-bonito-vestindo-roupas-casuais-e-oculos-com-um-sorriso-feliz-e-legal-no-rosto-pessoa-sortuda_839833-12772.jpg?w=996&t=st=1718977389~exp=1718977989~hmac=e1d0e92939caec7196f5ff82faddfadddf563e5c618163cba291fd56eb13da9a' }} />
                            <Text variant="titleLarge">Selecione o período</Text>
                        </Card.Content>
                        <Card.Content style={estilos.cardssss}>
                            <Card.Cover source={{ uri: 'https://img.freepik.com/fotos-gratis/aproxime-se-de-uma-pessoa-sorridente-na-sala-de-conferencias_23-2149085987.jpg?t=st=1718976152~exp=1718979752~hmac=5a2f13db0e05b8008a8c1ea3ecaaa2e10fc5aa550830d7ddc13496dd9cf64fb1&w=996' }} />
                            <Text variant="titleLarge">Selecione o período</Text>
                        </Card.Content>
                    </View>
                    <View style={estilos.perfis}>
                        <Card.Content style={estilos.cardssss}>
                            <Card.Cover source={{ uri: 'https://img.freepik.com/fotos-gratis/retrato-de-um-sorrindo-jovem-executiva-em-escritorio_23-2147838578.jpg?w=996&t=st=1718977523~exp=1718978123~hmac=66669ea9b1ebf7034a85acf1403dd0a00e3b8f6d321fb5b4427abfa5e8d3f536' }} />
                            <Text variant="titleLarge">Selecione o período</Text>
                        </Card.Content>
                        <Card.Content style={estilos.cardssss}>
                            <Card.Cover source={{ uri: 'https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-gerente-de-inicializacao-confiante-no-escritorio-posando-com-confianca-olhando_1258-195338.jpg?w=996&t=st=1718977430~exp=1718978030~hmac=0782bf877944661fc258c2f1fd05c1a3da0743ee7af04ee4706cc02bf07fcad3' }} />
                            <Text variant="titleLarge">Selecione o período</Text>
                        </Card.Content>
                    </View>
                    <Button mode="contained" onPress={() => console.log('Solicitar')} style={estilos.botao}>Solicitar</Button>
                </View>
            </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    espacoColorido: {
        backgroundColor: '#003376',
        height: 50,
        marginTop: 40,
        marginBottom: 40
    },
    cardssss: {
        width: "50%",
        height: "40%",
    },
    perfis:  {
        display: "flex",
        flexDirection: "row", 
        width: "100%",
        marginBottom: 20
    },
    botao: {
        backgroundColor: '#003376',
        margin: 5,
        width: 200,
        alignItems: 'center'
    },
    perfisssss: {
        margin: 5,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },
})