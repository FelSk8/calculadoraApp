/**
 * A continuación, se definen los colores utilizados en la aplicación, tanto para el modo claro como para el modo oscuro.
 * 
 * Existen otras maneras de manejar estilos en React Native, como:
 * - [Nativewind](https://www.nativewind.dev/) → Usa Tailwind CSS en React Native.
 * - [Tamagui](https://tamagui.dev/) → Permite diseño optimizado para web y móvil.
 * - [Unistyles](https://reactnativeunistyles.vercel.app) → Sistema de temas con TypeScript.
 */

export const Colors = {
    darkGray: '#2D2D2D', // Gris oscuro, usado para botones y fondos.
    lightGray: '#9B9B9B', // Gris claro, usado para botones secundarios.
    orage: '#FF9427', // Naranja, usado para los botones de operaciones.

    textPrimary: 'white', // Color del texto principal.
    textSecondary: '#666666', // Color del texto secundario.
    background: '#000000', // Color de fondo de la aplicación.
} as const; // `as const` convierte el objeto en un tipo de solo lectura (readonly).
