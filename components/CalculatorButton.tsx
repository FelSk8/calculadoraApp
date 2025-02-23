import { Colors } from '@/constants/Colors'; // Importa la paleta de colores de la app.
import { globalStyles } from '@/styles/global-styles'; // Importa estilos globales.
import { View, Text, Pressable } from 'react-native'; // Importa componentes básicos de React Native.

import * as Haptics from 'expo-haptics'; // Importa el módulo para vibraciones/hápticas en dispositivos móviles.


// Define las propiedades (props) que puede recibir el botón.
interface Props {
    label: string; // Texto que se mostrará en el botón.
    color?: string; // Color de fondo del botón (opcional, por defecto es gris oscuro).
    blackText?: boolean; // Define si el texto debe ser negro (por defecto es blanco).
    duobleSize?: boolean; // Define si el botón debe ser más grande (doble de ancho).
    onPress: () => void; // Función que se ejecutará al presionar el botón.
}

// Componente funcional del botón de la calculadora.
const CalculatorButton = ({ 
  label,
  color = Colors.darkGray,  // Color por defecto es gris oscuro.
  blackText = false, // Texto por defecto es blanco.
  duobleSize = false, // Tamaño normal por defecto.
  onPress 
}: Props) => {
  return (
    <Pressable 
      // Define los estilos del botón y su efecto al presionarlo.
      style={({ pressed }) => ({
        ...globalStyles.button, // Aplica los estilos generales del botón.
        backgroundColor: color, // Usa el color especificado en las props.
        opacity: pressed ? 0.8 : 1, // Reduce la opacidad cuando se presiona.
        width: duobleSize ? 180 : 80, // Si es "duobleSize", duplica el ancho.
      })}

      // Evento que se ejecuta cuando el usuario presiona el botón.
      onPress={() => {
        Haptics.impactAsync(); // Genera una vibración háptica al presionar.
        onPress(); // Llama a la función que se pasa como prop.
      }}
    >
      {/* Texto dentro del botón */}
      <Text 
        style={{
          ...globalStyles.buttonText, // Aplica estilos generales del texto.
          color: blackText ? 'black' : 'white', // Define el color del texto.
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton; // Exporta el componente para que pueda ser utilizado en la app.
