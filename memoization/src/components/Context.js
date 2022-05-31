import React from 'react'
import '../App.css'
import { ThemeProvider } from '../context/ThemeContext'
import Container from './Container'

function Context() {
    return (
        <div className='App'>
            <ThemeProvider>
                <Container />
            </ThemeProvider>
        </div >
    )
}

export default Context