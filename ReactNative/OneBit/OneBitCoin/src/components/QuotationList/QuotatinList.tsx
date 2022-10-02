import { Fragment } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function QuotatinList() {
    return (
        <Fragment>
            <View style={{
                backgroundColor: 'orange',
                width: '60%',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity
                    onPress={() => { }}>
                    <Text>7D</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}>
                    <Text>15D</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}>
                    <Text>30D</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}>
                    <Text>1M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}>
                    <Text>3M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}>
                    <Text>6M</Text>
                </TouchableOpacity>
            </View>
            {/* <ScrollView></ScrollView> */}
        </Fragment>
    );
}
