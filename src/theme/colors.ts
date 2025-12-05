export const theme = {
  colors: {
    primary: {
      main: '#26d07c',      // Verde principal
      light: '#4de49a',     // Verde mais claro
      lighter: '#e8f9f1',   // Verde bem claro
      dark: '#1ca463',      // Verde mais escuro
    },
    secondary: {
      main: '#151f6d',      // Azul escuro principal
      light: '#2a368f',     // Azul mais claro
      lighter: '#e8e9f3',   // Azul bem claro
      dark: '#0f1750',      // Azul mais escuro
    },
    background: {
      main: '#f6f6f6',
      light: '#ffffff',
      accent: '#e8f9f1',    // Mantendo o accent verde
    },
    text: {
      primary: '#151f6d',   // Usando o azul escuro como texto principal
      secondary: '#4a5568',
      light: '#718096',
    },
    success: {
      main: '#26d07c',      // Usando o verde principal
      light: '#4de49a',
    },
    white: '#ffffff',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #26d07c 0%, #1ca463 100%)',
    secondary: 'linear-gradient(135deg, #151f6d 0%, #0f1750 100%)',
    light: 'linear-gradient(135deg, #f8fafb 0%, #e8f9f1 100%)',
  },
  shadows: {
    primary: '0 8px 16px rgba(38, 208, 124, 0.12)',
    secondary: '0 8px 16px rgba(21, 31, 109, 0.12)',
    light: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
};
