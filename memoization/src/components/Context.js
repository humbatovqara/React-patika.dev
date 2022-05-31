import React from 'react'
import '../App.css'
import { ThemeProvider } from '../context/ThemeContext'
import { UserProvider } from '../context/UserContext'
import Container from './Container'

function Context() {
    return (
        <div className='App'>
            <ThemeProvider>
                <UserProvider>
                    <Container />
                </UserProvider>
            </ThemeProvider>
        </div >
    )
}

export default Context