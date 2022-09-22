import React from "react";
import { View, Text } from "react-native";
import styles from "./styleTitle";

export default function Title(){
    return(
        <View style={styles.title}>
            <Text style={styles.textTitle}>Health</Text>
        </View>
    )
}
