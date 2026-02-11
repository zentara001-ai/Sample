import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import { NavigationProvider } from './lib/NavigationContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <NavigationProvider>
                    <App />
                </NavigationProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)