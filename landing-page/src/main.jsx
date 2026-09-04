import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';
import { mantineTheme } from './theme/mantineTheme';
import '@fontsource-variable/inter';
import '@mantine/core/styles.css';
import './theme/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MantineProvider theme={mantineTheme} defaultColorScheme="dark">
            <App />
        </MantineProvider>
    </React.StrictMode>
);
