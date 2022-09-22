import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import ResultIMC from "./ResultIMC/ResultIMC";

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")


    function imcCalculator() {
        let localWeight = weight;
        let localHeight = height;
        return setImc((localWeight/(localHeight*localHeight)));
    }

    function validator() {
        let localWeight = weight;
        let localHeight = height;

        if(localWeight && localHeight){
            imcCalculator();
            setWeight(null);
            setHeight(null);
            setMessageIMC("Seu IMC é igual:");
            setTextButton("Calcular Novamente");
            return;
        }
        setImc(null);
        setTextButton("Calcular");
        setMessageIMC("Preencha o peso e a altura")
    }
    
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Altura"
                    keyboardType="numeric"
                ></TextInput>
                <Text>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                    placeholder="Peso"
                    keyboardType="numeric"
                ></TextInput>
                <Button  
                onPress={() => validator()}
                title={textButton}></Button>
            </View>
            <ResultIMC mensagemResultado={messageIMC} result={imc}></ResultIMC>
        </View>
    )
}
