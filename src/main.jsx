import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { colors } from '@utilities';
import App from './App.jsx';

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.tertiary,
        },
    },
    typography: {
        fontFamily: 'Montserrat, Arial, sans-serif',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontFamily: 'Montserrat, Arial, sans-serif',
                },
            },
        },
    },
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </StrictMode>,
);
