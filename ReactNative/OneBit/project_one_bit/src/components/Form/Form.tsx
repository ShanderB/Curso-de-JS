import React from "react";
import { View, Text, TextInput, Vibration, TouchableOpacity} from "react-native";
import { useState } from "react";
import ResultIMC from "./ResultIMC/ResultIMC";
import styles from "./styleForm";
export default function Form() {
    const [height, setHeight] = useState(undefined)
    const [weight, setWeight] = useState(undefined)
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(0)
    const [textButton, setTextButton] = useState("Calcular")
    const [hasError, setHasError] = useState("")

    function pageHasError() {
        if(!imc){
            Vibration.vibrate();
            setHasError("Campo Obrigatório");
        }
    }

    function imcCalculator() {
        let localWeight = weight;
        let localHeight = height;
        return setImc((localWeight/(localHeight*localHeight)).toFixed(2));
    }

    function validator() {
        let localWeight = weight;
        let localHeight = height;

        if(localWeight && localHeight){
            imcCalculator();
            setWeight(undefined);
            setHeight(undefined);
            setMessageIMC("Seu IMC é igual:");
            setTextButton("Calcular Novamente");
            setHasError("");
            return;
        }
        pageHasError();
        setImc(0);
        setTextButton("Calcular");
        setMessageIMC("Preencha o peso e a altura")
    }
    
    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{hasError}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Altura"
                    keyboardType="numeric"
                ></TextInput>
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{hasError}</Text>
                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                    placeholder="Peso"
                    keyboardType="numeric"
                ></TextInput>
                <TouchableOpacity style={styles.buttonCalculator}
                onPress={() => validator()}
                >
                    <Text style={styles.buttonCalculatorText}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC mensagemResultado={messageIMC} result={imc}></ResultIMC>
        </View>
    )
}
