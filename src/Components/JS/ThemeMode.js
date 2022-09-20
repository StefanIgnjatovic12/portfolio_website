import '../CSS/ThemeMode.css'
import {useState} from "react";

const ThemeMode = () => {
    const lightTheme = "light"
    const darkTheme = "dark"

    // const [theme, setTheme] = useState(localStorage.getItem('theme') !== null ? localStorage.getItem('theme') : 'light')
    const [theme, setTheme] = useState('dark')

    const enableLightMode = () => {
        document.body.classList.add('lightmode')
        localStorage.setItem("theme", "light")
        setTheme(lightTheme)

    }
    const enableDarkMode = () => {
        document.body.classList.remove('lightmode')
        localStorage.setItem("theme", "dark")
        setTheme(darkTheme)
    }

    if (localStorage.getItem('theme') == null) {
        enableDarkMode()
    }

    // Switching themes on button click
    const switchTheme = e => {
        if (theme === darkTheme) {
            enableLightMode()
            console.log(localStorage.getItem('theme'))
        } else if (theme === lightTheme) {
            enableDarkMode()
            console.log(localStorage.getItem('theme'))
        } else(console.log(theme))
    }


    return (
        <div className="modeButton">
            <button
                className="dark-mode-toggle"
                onClick={e => {
                    switchTheme(e)
                }}
            >
                {theme === 'light'
                    ? <img className="moon" src={process.env.PUBLIC_URL + `/images/dark.png`} alt=""/>
                    : <img className="sun" src={process.env.PUBLIC_URL + `/images/light.png`} alt=""/>

                }
            </button>
        </div>
    )
}

export default ThemeMode