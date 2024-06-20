import { View, StyleSheet, Text } from "react-native";

export default props => {
    return(
        <View>
            <Text styles={styles.container}>Login</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        color: 'red',
      backgroundColor: '#12ad5c'
    }
  });
  