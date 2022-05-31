import { useContext } from 'react'

import ThemeContext from '../context/ThemeContext'

function Footer() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            Active Theme: {theme}
            <br />
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme Footer</button>
        </div>
    )
}

export default Footer