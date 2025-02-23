import { globalStyles } from '@/styles/global-styles'; // Importa los estilos globales de la app.
import { Text, type TextProps } from 'react-native'; // Importa el componente Text y sus propiedades.

// Define las propiedades (props) que puede recibir este componente.
interface Props extends TextProps {
    variant?: 'h1' | 'h2'; // Permite definir el tamaño del texto ('h1' para el título principal, 'h2' para subtítulos).
}

// Componente funcional que muestra un texto con un estilo predefinido.
const ThemeText = ({ children, variant = 'h1', ...rest }: Props) => {
  return (
    <Text 
      style={[
        { color: 'white', fontFamily: 'SpaceMono' }, // Estilo base: texto blanco y fuente SpaceMono.
        variant === 'h1' && globalStyles.mainResult, // Si es 'h1', aplica el estilo de resultado principal.
        variant === 'h2' && globalStyles.subResult,  // Si es 'h2', aplica el estilo de resultado secundario.
      ]}
      numberOfLines={1} // Limita el texto a una sola línea.
      adjustsFontSizeToFit // Ajusta automáticamente el tamaño de la fuente si el texto es muy largo.
      {...rest} // Pasa cualquier otra prop adicional que reciba el componente.
    >
      {children} {/* Renderiza el contenido del texto */}
    </Text>
  );
}

export default ThemeText; // Exporta el componente para que pueda ser usado en otras partes de la app.
