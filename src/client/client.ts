import { createApp } from 'vue'
import Example from './components/Example.vue'
import '../styles/main.css'

let visible = true

// Wait for the NUI frame to be ready
document.addEventListener('DOMContentLoaded', () => {
    const app = createApp(Example)
    app.mount('#app')
    
    // En développement, on affiche l'UI par défaut
    if (process.env.NODE_ENV === 'development') {
        const root = document.getElementById('app')
        if (root) root.style.display = 'block'
    } else {
        // En production (FiveM), on cache l'UI par défaut
        const root = document.getElementById('app')
        if (root) root.style.display = 'none'
    }
})

// Ces fonctions ne sont disponibles que dans FiveM
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
    // Register command to toggle UI
    RegisterCommand('toggleui', () => {
        visible = !visible
        SendNuiMessage(JSON.stringify({
            type: visible ? 'show' : 'hide'
        }))
    }, false)

    // Handle NUI messages from the game
    window.addEventListener('message', (event) => {
        const data = event.data
        
        if (data.type === 'show') {
            const root = document.getElementById('app')
            if (root) root.style.display = 'block'
        } else if (data.type === 'hide') {
            const root = document.getElementById('app')
            if (root) root.style.display = 'none'
        }
    })
} 