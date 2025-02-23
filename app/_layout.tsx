import { Platform, View } from 'react-native'; // Importa Platform para detectar el sistema operativo y View para la estructura de la UI.

import { Slot } from 'expo-router'; // Slot es un contenedor que renderiza la ruta activa en Expo Router.
import { StatusBar } from 'expo-status-bar'; // Componente para personalizar la barra de estado.
import { useFonts } from 'expo-font'; // Hook para cargar fuentes personalizadas.

import { globalStyles } from '@/styles/global-styles'; // Importa estilos globales.

import * as NavigationBar from 'expo-navigation-bar'; // Importa el módulo para controlar la barra de navegación en Android.

// Verifica si la plataforma es Android.
const isAndroid = Platform.OS === 'android';

// Si es Android, cambia el color de la barra de navegación a negro.
if (isAndroid) {
  NavigationBar.setBackgroundColorAsync('black');
}

const RootLayout = () => {
  // Carga la fuente personalizada "SpaceMono".
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Si la fuente aún no está cargada, devuelve null (evita mostrar contenido sin la fuente correcta).
  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      {/* Slot renderiza la pantalla correspondiente según la navegación */}
      <Slot />

      {/* Define el estilo de la barra de estado como "light" (texto en blanco) */}
      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout; // Exporta el componente para que pueda ser usado en la app.
