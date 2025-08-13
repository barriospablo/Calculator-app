import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">2+2</ThemeText>
        <ThemeText variant="h2">4</ThemeText>
      </View>
      {/* Lista de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          onPress={() => console.log("Pressed")}
          color={Colors.lightGray}
          blackText
        />
        <CalculatorButton
          label="+/-"
          onPress={() => console.log("Pressed")}
          color={Colors.lightGray}
          blackText
        />
        <CalculatorButton
          label="del"
          onPress={() => console.log("Pressed")}
          color={Colors.lightGray}
          blackText
        />
        <CalculatorButton
          label="%"
          color={Colors.oragne}
          onPress={() => console.log("Pressed")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => console.log("Pressed")} />
        <CalculatorButton label="8" onPress={() => console.log("Pressed")} />
        <CalculatorButton label="9" onPress={() => console.log("Pressed")} />
        <CalculatorButton
          label="*"
          color={Colors.oragne}
          onPress={() => console.log("Pressed")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => console.log("Pressed")} />
        <CalculatorButton label="5" onPress={() => console.log("Pressed")} />
        <CalculatorButton label="6" onPress={() => console.log("Pressed")} />
        <CalculatorButton
          label="-"
          color={Colors.oragne}
          onPress={() => console.log("Pressed")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => console.log("Pressed")} />
        <CalculatorButton label="2" onPress={() => console.log("Pressed")} />
        <CalculatorButton label="3" onPress={() => console.log("Pressed")} />
        <CalculatorButton
          label="+"
          color={Colors.oragne}
          onPress={() => console.log("Pressed")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          doubleSize
          label="0"
          onPress={() => console.log("Pressed")}
        />
        <CalculatorButton label="." onPress={() => console.log("Pressed")} />
        <CalculatorButton
          label="="
          color={Colors.oragne}
          onPress={() => console.log("Pressed")}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
