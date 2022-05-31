import React from 'react'
import '../App.css'
import { ThemeProvider } from '../context/ThemeContext'
import Button from './Button'
import Footer from './Footer'

function Context() {
    return (
        <div className='App'>
            <ThemeProvider>
                <Button />
                <hr />
                <Footer />
            </ThemeProvider>
        </div >
    )
}

export default Context