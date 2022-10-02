import { StyleSheet, Text, View } from 'react-native';

export default function Contacts({ navigation }) {
    return (
        <View>

            <View style={styles.container}>
                <Text>Maria</Text>
                <Text
                    onPress={() => navigation.navigate('Information',
                    {nome: "Maria"})}
                >Navegar information</Text>
            </View>
            <View style={styles.container}>
                <Text>Amanda</Text>
                <Text
                    onPress={() => navigation.navigate('Information',
                    {nome: "Amanda"})}
                >Navegar information</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
