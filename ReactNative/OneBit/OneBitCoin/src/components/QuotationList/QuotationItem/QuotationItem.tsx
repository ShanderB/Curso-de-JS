import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';


export default function QuotationItem() {
    return (
        <View style={{
            backgroundColor: 'green',
            width: '60%',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View>
                <View>
                    <Text>01/12/2022</Text>
                </View>
                <View>
                    <Text>R$1000</Text>
                </View>
            </View>
        </View>
    );
}
