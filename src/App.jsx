import React, { useState } from 'react'
import { colors } from "./constants/colors.js"

function App() {
    const [activeSection, setActiveSection] = useState('home');

    // Helper function to render sections based on active section state
    const renderSection = () => {
        switch (activeSection) {
            case 'home':
                return ()
            case 'about':
                return ()
            case 'products':
                return ()
            case 'blog':
                return ()
            case 'contact':
                return ()
            default:
                return ()
        }
    }
}

export default App