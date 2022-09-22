import React, { ObjectHTMLAttributes } from "react";
import { View, Text } from "react-native";
import styles from "./styleResultIMC";
export default function ResultIMC(props: Propriedades){
    return(
        <View style={styles.contextImc}>
        <Text style={styles.titleResultImc}>
          {props.mensagemResultado}
        </Text>
        <Text style={styles.resultImc}>
          {props.result}
        </Text>
      </View>
    )
}

export interface Propriedades {
    result: string;
    mensagemResultado: string;
    /// ...
}