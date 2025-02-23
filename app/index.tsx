import { View, Text } from 'react-native';
import React from 'react';

// Importa estilos globales
import { globalStyles } from '@/styles/global-styles';

// Importa componentes personalizados
import ThemeText from '@/components/ThemeText';
import CalculatorButton from '@/components/CalculatorButton';

// Importa los colores de la app
import { Colors } from '@/constants/Colors';

// Importa el hook personalizado que maneja la lógica de la calculadora
import { useCalculator } from '@/hooks/useCalculator';

const CalculatorApp = () => {
  // Desestructura las funciones y variables que vienen del hook `useCalculator`
  const {
    formula,         // Fórmula actual ingresada en la calculadora
    prevNumber,      // Número previo antes de una operación
    buildNumber,     // Función para construir un número ingresado
    clean,           // Función para limpiar la calculadora
    toggleSing,      // Función para cambiar el signo del número actual (+/-)
    deleteLast,      // Función para eliminar el último dígito ingresado
    divideOperation, // Función para realizar la operación de división
    multiplyOperation, // Función para realizar la multiplicación
    subtractOperation, // Función para realizar la resta
    addOperation,      // Función para realizar la suma
    calculateResult,   // (No se usa en este código)
    calculateResultado // Función para calcular el resultado final
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      
      {/* Contenedor para mostrar los resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        {/* Muestra la fórmula ingresada */}
        <ThemeText variant='h1'>{formula}</ThemeText>

        {/* Muestra el número previo si es diferente de la fórmula actual */}
        {
          formula === prevNumber ? (
            <ThemeText variant='h2'> </ThemeText>
          ) : (
            <ThemeText variant='h2'>{prevNumber}</ThemeText>
          )
        }
      </View>

      {/* Fila de botones: C, +/-, del, ÷ */}
      <View style={globalStyles.row}>
        <CalculatorButton label='C' blackText color={Colors.lightGray} onPress={clean} />
        <CalculatorButton label='+/-' color={Colors.lightGray} blackText onPress={toggleSing} />
        <CalculatorButton label='del' color={Colors.lightGray} blackText onPress={deleteLast} />
        <CalculatorButton label='÷' color={Colors.orage} onPress={divideOperation} />
      </View>

      {/* Fila de botones: 7, 8, 9, x */}
      <View style={globalStyles.row}>
        <CalculatorButton label='7' blackText onPress={() => buildNumber('7')} />
        <CalculatorButton label='8' blackText onPress={() => buildNumber('8')} />
        <CalculatorButton label='9' blackText onPress={() => buildNumber('9')} />
        <CalculatorButton label='x' color={Colors.orage} onPress={multiplyOperation} />
      </View>

      {/* Fila de botones: 4, 5, 6, - */}
      <View style={globalStyles.row}>
        <CalculatorButton label='4' blackText onPress={() => buildNumber('4')} />
        <CalculatorButton label='5' blackText onPress={() => buildNumber('5')} />
        <CalculatorButton label='6' blackText onPress={() => buildNumber('6')} />
        <CalculatorButton label='-' color={Colors.orage} onPress={subtractOperation} />
      </View>

      {/* Fila de botones: 1, 2, 3, + */}
      <View style={globalStyles.row}>
        <CalculatorButton label='1' blackText onPress={() => buildNumber('1')} />
        <CalculatorButton label='2' blackText onPress={() => buildNumber('2')} />
        <CalculatorButton label='3' blackText onPress={() => buildNumber('3')} />
        <CalculatorButton label='+' color={Colors.orage} onPress={addOperation} />
      </View>

      {/* Fila de botones: 0, ., = */}
      <View style={globalStyles.row}>
        <CalculatorButton label='0' duobleSize blackText onPress={() => buildNumber('0')} />
        <CalculatorButton label='.' blackText onPress={() => buildNumber('.')} />
        <CalculatorButton label='=' color={Colors.orage} onPress={calculateResultado} />
      </View>

    </View>
  );
};

export default CalculatorApp; // Exporta el componente para su uso en la aplicación.
