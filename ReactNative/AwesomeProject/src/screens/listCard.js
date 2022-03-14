import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class ListCard extends React.Component {
    render() {
        return (
           <TouchableOpacity
           onPress={this.props.onPress}
           style={{
               paddingHorizontal:36,
               alignSelf:'center',
               marginTop:20,
               backgroundColor:'#FFF',
               height:182,
               elevation:1,
               width:270,
               borderRadius:15
           }}>
               <View style={{
                   flexDirection:'row',
                   paddingTop:20,
                   alignSelf:'center'
               }}>
                   <Text style={{
                       fontFamily:'RobotoBold',
                       color:'#4b3ca7',
                       fontSize:20
                   }}>
                       NYC
                   </Text>

                   <Text style={{
                       color:'#4b3ca7',
                       fontSize:20,
                       paddingHorizontal:12
                   }}>
                       ....................
                   </Text>
                   <Text style={{
                       fontFamily:'RobotoBold',
                       color:'#4b3ca7',
                       fontSize:20,
                       paddingHorizontal:12
                   }}>
                       IDN
                   </Text>
               </View>

               <View style={{
                   flexDirection:'row',
                   marginTop:5,
                   alignItems:'center'
               }}>
                   <Text style={{
                       fontFamily:'RobotoRegualar',
                       color:'#a2adb',
                       fontSize:11
                   }}>
                        New York
                   </Text>
                   <Text style={{
                       fontFamily:'RobotoRegualar',
                       color:'#a2adb',
                       fontSize:11,
                       paddingHorizontal:134
                   }}>
                        Indonesia
                   </Text>
                   
               </View>

           </TouchableOpacity>
        );
    }
}
