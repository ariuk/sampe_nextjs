import { createTheme } from '@mui/material/styles';

export const themeDark = createTheme({
  palette: {
    mode: 'dark', // This sets the overall color mode
    primary: {
      main: '#90caf9', // Light blue, for primary buttons and links
      contrastText: '#fff', // White text for contrast against the light blue
    },
    secondary: {
      main: '#f48fb1', // Pink, for secondary buttons and links
      contrastText: '#fff', // White text for contrast against the pink
    },
    error: {
      main: '#f44336', // Red, for errors
    },
    background: {
      default: '#303030', // Dark grey, for backgrounds
      paper: '#424242', // Slightly lighter grey, for elements like cards and dialogs
    },
    text: {
      primary: '#fff', // White text for primary content
      secondary: '#bdbdbd', // Light grey text for secondary content
    },
  },
});
