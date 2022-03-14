import React from 'react';
import {
    View,
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Modal,
    Image,
    ImageBackground,
    ScrollView,
} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import ModalCard from './modalCard'
import ListCard from './listCard'

export default class Detail extends React.Component {
    state = {
        modalVisible: false
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible })
    }
    render() {
        const modalVisible = this.state
        return (
            <ImageBackground
                source={require('../images/back2.png')}
                style={{ height: '100%', width: '100%' }}
            >
                <View style={{
                    flexDirection: 'row',
                    marginTop: 40,
                    alignItems: 'center',
                    paddingHorizontal: 40
                }}>
                    <Icon name='menu' size={30} color='#a2a2db' style={{ width: 20 }} />
                    <Icon name='account-circle' size={30} color='#a2a2db' style={{ marginLeft: 230, width: 20 }} />
                </View>

                <View style={{
                    width: '100%',
                    marginTop: 50,
                    marginBottom: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('../images/p.jpg')}
                            style={{ height: 26, width: 26 }}
                        />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 40
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontFamily: 'RobotoBold',
                        color: '#FFF'
                    }}>
                        NYC
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        color: '#FFF',
                        paddingHorizontal: 15
                    }}>
                        ............................................................................
                    </Text>
                    <Text style={{
                        fontSize: 24,
                        fontFamily: 'RobotoBold',
                        color: '#FFF'
                    }}>
                        IDN
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: 40
                }}>
                    <Text style={{
                        color: '#a2a2db',
                        fontFamily: 'RobotoRegular'
                    }}>
                        New York
                    </Text>
                    <Text style={{
                        color: '#a2a2db',
                        fontFamily: 'RobotoRegular',
                        paddingLeft: 376
                    }}>
                        Indonesia
                    </Text>
                </View>


                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 50,
                    marginTop: 60
                }}>
                    <Icon name='dots-horizontal' color='black' size={32} />
                    <Icon name='filter' color='black' size={26} style={{ marginLeft: 380, width: 20, height: 18 }}/>
                </View>

                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    style={{ marginVertical: 5 }}
                >
                    <ListCard onPress={() => { this.setModalVisible(true) }} />

                    <View>
                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal Closed')
                            }}
                        >
                            <ModalCard
                                onPress={() => {
                                    this.setModalVisible(!modalVisible)
                                }} />
                        </Modal>
                    </View>
                </ScrollView>

            </ImageBackground>
        );
    }
}
