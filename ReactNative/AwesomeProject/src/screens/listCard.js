import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class ListCard extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={{
                    paddingHorizontal: 36,
                    alignSelf: 'center',
                    marginTop: 20,
                    backgroundColor: '#FFF',
                    height: 182,
                    elevation: 1,
                    width: 270,
                    borderRadius: 15
                }}>
                <View style={{
                    flexDirection: 'row',
                    paddingTop: 20,
                    alignSelf: 'center'
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
                        ....................
                    </Text>
                    <Text style={{
                        fontFamily: 'RobotoBold',
                        color: '#4b3ca7',
                        fontSize: 20,
                        paddingHorizontal: 12
                    }}>
                        IDN
                    </Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'RobotoRegualar',
                        color: '#a2adb',
                        fontSize: 11
                    }}>
                        New York
                    </Text>
                    <Text style={{
                        fontFamily: 'RobotoRegualar',
                        color: '#a2adb',
                        fontSize: 11,
                        paddingHorizontal: 134
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
                        color: '#522289',
                        fontSize: 16
                    }}>
                        09:00 AM
                    </Text>
                    <Text style={{
                        fontFamily: 'RobotoRegular',
                        color: '#522289',
                        fontSize: 16,
                        paddingLeft: 100
                    }}>
                        21:00 PM
                    </Text>
                </View>

                <Text style={{
                    fontFamily: 'RobotoRegular',
                    color: '#a2a2db',
                    fontSize: 12,
                }}>
                    20 Jun, 2021
                </Text>

                <Text style={{
                    color: '#a2a2db',
                    fontSize: 17,
                    marginRight: -5,
                    marginVertical: 8
                }}>
                    .......................................................
                </Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'RobotoRegular',
                        color: '#4b3ca7',
                        fontSize: 17
                    }}>
                        Lorem ipsum
                    </Text>
                    <Text style={{
                        fontFamily: 'RobotoRegular',
                        color: '#4b3ca7',
                        fontSize: 17,
                        paddingLeft: 76
                    }}>
                        $400
                    </Text>
                </View>

            </TouchableOpacity>
        );
    }
}
