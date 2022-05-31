import React from 'react'
import '../App.css'
import ThemeContext from '../context/ThemeContext'
import Button from './Button'

function Context() {
    return (
        <div className='App'>
            <ThemeContext.Provider value="dark">
                <Button />
            </ThemeContext.Provider>
        </div>
    )
}

export default Context