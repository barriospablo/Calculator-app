import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { Text, View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text style={globalStyles.mainResult}>2+2</Text>
      <Text style={globalStyles.subResult}>4</Text>
    </View>
  );
};

export default CalculatorApp;
