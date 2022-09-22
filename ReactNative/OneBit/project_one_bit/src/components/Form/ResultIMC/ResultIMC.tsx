import React, { ObjectHTMLAttributes } from "react";
import { View, Text } from "react-native";

export default function ResultIMC(props: Propriedades){
    return(
        <View>
            <Text>{props.mensagemResultado}</Text>
            <Text>{props.result}</Text>
        </View>
    )
}

export interface Propriedades {
    result: string;
    mensagemResultado: string;
    /// ...
}