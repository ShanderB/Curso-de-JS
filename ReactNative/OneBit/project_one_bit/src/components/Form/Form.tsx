import React from "react";
import { View, Text, TextInput, Vibration, TouchableOpacity, Keyboard, Pressable, FlatList} from "react-native";
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
    const [imcList, setImcList] = useState([])

    function pageHasError() {
        if(!imc){
            Vibration.vibrate();
            setHasError("Campo Obrigatório");
        }
    }

    function imcCalculator() {
        let localWeight = weight;
        let localHeight = height;
        let total: number = (localWeight/(localHeight*localHeight)).toFixed(2);
        setImcList((arr) => [...arr, {id: new Date().getTime(), imc: total}]);
        setImc(total)
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
                {imc == 0 ? 
        <Pressable  style={styles.form}>
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
        </Pressable>
        : 
        <View>
            <ResultIMC mensagemResultado={messageIMC} result={imc}></ResultIMC>
            <TouchableOpacity style={styles.buttonCalculator}
                onPress={() => validator()}
                >
                    <Text style={styles.buttonCalculatorText}>{textButton}</Text>
                </TouchableOpacity>
        </View>
        }
        <FlatList style={{
            height: 58,
            width: '100%',
            paddingRight: 20
             }}
        data={imcList.reverse()}
        renderItem={({item}) => {
            return (
                <Text>
                    <Text>
                        Resultado
                    </Text>
                    {item.imc}
                </Text>
            )
        }}
        keyExtractor={(item) => {
            item.id
        }}
        >
            
        </FlatList>
            </View>
    )
}
