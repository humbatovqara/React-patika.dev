import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

import Button from './Button'
import Footer from './Footer'
import Profile from './Profile';

function Container() {
    const { theme } = useContext(ThemeContext);

    console.log(theme);

    return (
        <div className={`App ${theme === "dark" ? theme : ""}`}>
            <Button />
            <hr />
            <Footer />
            <hr />
            <Profile />
        </div>
    )
}

export default Container