// Importamos el objeto Colors para utilizar los colores definidos en el archivo de constantes.
import { Colors } from "@/constants/Colors";
// Importamos StyleSheet de react-native para crear los estilos.
import { StyleSheet } from "react-native";

// Definimos un objeto de estilos globales utilizando StyleSheet.create
export const globalStyles = StyleSheet.create({
    // Estilo para el fondo de la pantalla.
    background: {
        flex: 1, // Esto asegura que el fondo ocupe todo el espacio disponible en la pantalla.
        backgroundColor: Colors.background, // Usamos el color de fondo definido en Colors (probablemente negro).
    },

    // Estilo para el contenedor principal de la calculadora.
    calculatorContainer: {
        flex: 1, // Ocupará toda la altura de la pantalla.
        justifyContent: 'flex-end', // Coloca los elementos dentro del contenedor en la parte inferior.
        paddingBottom: 20, // Agrega un margen inferior para evitar que los botones queden pegados al borde de la pantalla.
    },

    // Estilo para el resultado principal (el número grande en la pantalla).
    mainResult: {
        color: Colors.textPrimary, // El texto será blanco (definido en Colors).
        fontSize: 70, // Tamaño grande para que el número sea claramente visible.
        textAlign: 'right', // El texto se alineará a la derecha.
        fontWeight: '400', // Peso de la fuente normal, para no hacerla demasiado gruesa.
        // fontFamily: 'SpaceMono', // La fuente está comentada, pero si la usas debes cargarla con expo-font.
    },

    // Estilo para el resultado secundario (el número más pequeño debajo del principal).
    subResult: {
        color: Colors.textSecondary, // Usamos un color de texto más claro (gris).
        fontSize: 40, // Tamaño de fuente más pequeño que el resultado principal.
        textAlign: 'right', // También se alinea a la derecha.
        fontWeight: '300', // Fuente más delgada, con menos grosor que el principal.
    },

    // Estilo para las filas de botones.
    row: {
        flexDirection: 'row', // Los botones dentro de esta fila estarán alineados horizontalmente.
        justifyContent: 'center', // Los botones estarán centrados dentro de la fila.
        marginBottom: 18, // Un margen inferior para separar las filas de botones.
        paddingHorizontal: 10, // Relleno horizontal para asegurar que no estén pegados a los bordes de la pantalla.
    },

    // Estilo para los botones.
    button: {
        height: 80, // El botón tendrá una altura de 80.
        width: 80, // Y un ancho de 80, para ser cuadrado.
        backgroundColor: Colors.darkGray, // Color de fondo oscuro para el botón.
        borderRadius: 100, // Le damos bordes redondeados (un valor alto para hacerlo circular).
        justifyContent: 'center', // Alineamos el contenido del botón al centro.
        marginHorizontal: 10, // Agregamos un espacio horizontal entre los botones.
    },

    // Estilo para el texto dentro de los botones.
    buttonText: {
        textAlign: 'center', // El texto dentro del botón se alinea al centro.
        padding: 10, // Agregamos un poco de relleno para que el texto no quede pegado al borde del botón.
        fontSize: 30, // Tamaño de fuente de 30 para que el texto sea legible.
        color: Colors.textPrimary, // El texto será blanco (definido en Colors).
        fontWeight: '300', // Peso de fuente ligero, para que no se vea demasiado grueso.
        fontFamily: 'SpaceMono', // Usamos la fuente SpaceMono si está correctamente cargada.
    }
});
