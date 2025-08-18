import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "*",
  divide = "/",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("");

  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    // setFormula(number);
  }, [number]);

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number, formula]);

  const clean = () => {
    setNumber("0");
    setPrevNumber("0");
    setFormula("0");

    lastOperation.current = undefined;
  };

  const toggleSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }
    setNumber("-" + number);
  };
  const deleteLast = () => {
    //My solution
    // if (number.length > 0 && number !== "0") {
    //   setNumber(number.slice(0, -1));
    // }
    // if (number.length === 1) {
    //   setNumber("0");
    // }
    let currentSign = "";
    let temporalNumber = number;
    if (number.includes("-")) {
      currentSign = "-";
      temporalNumber = number.substring(1);
    }
    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }
    setNumber("0");
  };

  const setLastNumber = () => {
    //TODO: Caluclar el resultado
    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    }

    setPrevNumber(number);
    setNumber("0");
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };
  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const buildNumber = (numberString: string) => {
    //Verificar si ya existe el punto decimal
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      //Evaluar si es otro cero y no hay punto
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }
      //Evaluar si es diferente de cero, no hay punto y es el primer numero
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      //Evitar el 000000
      if (numberString === "0" && !number.includes(".")) {
        return;
      }
      return setNumber(number + numberString);
    }
    return setNumber(number + numberString);
  };

  return {
    //Props
    formula,
    number,
    prevNumber,
    //Methods
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
  };
};
