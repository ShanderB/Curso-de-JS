import React from 'react'
import {View,Text, TouchableHighlight} from 'react-native';

export default class ModalCard extends React.Component {
    render() {
        return (
            <View style={{
                paddingHorizontal: 30,
                alignSelf: 'center',
                marginTop: 290,
                backgroundColor: '#FFF',
                height: 386,
                elevation: 1,
                width: 270,
                borderRadius: 15
            }}>
                <View style={{
                    flexDirection: 'row',
                    paddingTop: 20,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'RobotoBold',
                        color: '#4b3ca7',
                        fontSize: 20
                    }}>
                        NYC
                    </Text>
                    <Text style={{
                        color: '#4b3ca7',
                        fontSize: 20,
                        paddingHorizontal: 12
                    }}>
                        ..........................
                    </Text>
                    <Text style={{
                        fontFamily: 'RobotoBold',
                        color: '#4b3ca7',
                        fontSize: 20
                    }}>
                        IDN
                    </Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginTop: -5,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'RobotoRegular',
                        color: '#a2a2db',
                        fontSize: 11
                    }}>
                        New York
                    </Text>
                    <Text style={{
                        fontFamily: 'RobotoRegular',
                        color: '#a2a2db',
                        fontSize: 11,
                        paddingLeft: 154
                    }}>
                        Indonesia
                    </Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'RobotoRegular',
                        fontSize: 16,
                        color: '#522289'
                    }}>
                        09:00 AM
                    </Text>
                    <Text style={{
                        fontFamily: 'RobotoRegular',
                        fontSize: 16,
                        color: '#522289',
                        paddingLeft: 79
                    }}>
                        21:00 AM
                    </Text>
                </View>
                <Text style={{
                    fontFamily: 'RobotoRegular',
                    fontSize: 12,
                    color: '#a2a2db'
                }}>
                    20 June, 2021
                </Text>

                <View style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'RobotoRegular',
                        fontSize: 12,
                        color: '#a2a2db'
                    }}>
                        Name
                    </Text>
                    <Text style={{
                        fontFamily: 'RobotoRegular',
                        fontSize: 12,
                        color: '#a2a2db',
                        paddingLeft: 155
                    }}>
                        Seat
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'RobotoRegular',
                        fontSize: 16,
                        color: '#522289',
                    }}>
                        Lorem
                    </Text>
                    <Text style={{
                        fontFamily: 'RobotoRegular',
                        fontSize: 16,
                        color: '#522289',
                        paddingLeft: 140
                    }}>
                        15A
                    </Text>
                </View>
                <Text style={{
                    fontSize: 16,
                    color: '#522289',
                    marginVertical: 16,
                    marginTop: -5
                }}>
                    ............................................................
                </Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: -20
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: '#a2a2db',
                        fontFamily: 'RobotoRegular',
                    }}>
                        Class
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        color: '#a2a2db',
                        fontFamily: 'RobotoBold',
                    }}>
                        Price
                    </Text>
                </View>
                <TouchableHighlight
                    underlayColor={'#6600bb'}
                    style={{
                        width: 200,
                        marginLeft: 5,
                        elevation: 2,
                        marginTop: 25,
                        backgroundColor: '#44FEA1',
                        paddingVertical: 13,
                        borderRadius: 25,
                        alignSelf: 'center'
                    }}
                    onPress={this.props.onPress}
                >
                    <Text style={{
                        fontFamily: 'RobotoBold',
                        color: '#FFF',
                        textAlign: 'center',
                        fontSize: 18
                    }}>
                        Check Out
                    </Text>
                </TouchableHighlight>

                <Text style={{
                    alignSelf: 'center',
                    color: '#a2a2db',
                    fontFamily: 'RobotoRegular',
                    fontSize: 12,
                    paddingLeft: 11,
                    marginVertical: 16
                }}>
                    Lorem ipsum dolor sit amet
                </Text>

            </View>
        );
    }
}
