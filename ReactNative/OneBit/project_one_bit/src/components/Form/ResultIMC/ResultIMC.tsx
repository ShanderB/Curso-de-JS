import React, { ObjectHTMLAttributes } from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";
import styles from "./styleResultIMC";
export default function ResultIMC(props: Propriedades){

  const onShare = async () => {
    const result = await Share.share({
      message:"Meu IMC hoje é: " + props.result, 
    })
  }
  
    return(

      <View style={styles.contextImc}>
      <View style={styles.boxSharebutton}>
      <View style={styles.contextImc}>
        <Text style={styles.titleResultImc}>
          {props.mensagemResultado}
        </Text>
        <Text style={styles.resultImc}>
          {props.result}
        </Text>
      </View>
        <TouchableOpacity 
          onPress={onShare}
          style={styles.shared}
        >
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>

    </View>
    )
}

export interface Propriedades {
    result: number;
    mensagemResultado: string;
    /// ...
}