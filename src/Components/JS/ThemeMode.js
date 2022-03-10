import '../CSS/ThemeMode.css'
import {useEffect, useState} from "react";

const ThemeMode = () => {
    const lightTheme = "light"
    const darkTheme = "dark"
    // let theme = localStorage.getItem('theme')
    const [theme, setTheme] = useState(localStorage.getItem('theme'))
    useEffect(() => {
        console.log('use effect called')
    }, [theme])

    // useEffect(() => {
    //     modeSwitch()
    //     console.log('modeswitch')
    // },[])

    // theme = localStorage.getItem('theme')

    const enableLightMode = () => {
        document.body.classList.add('lightmode')
        // localStorage.setItem("theme", "light")
        // theme = lightTheme
        setTheme(lightTheme)

    }
    const enableDarkMode = () => {
        document.body.classList.remove('lightmode')
        // localStorage.setItem("theme", "dark")
        // theme = darkTheme
        setTheme(darkTheme)
    }

    //checking local storage to see what the theme was during last session
    const modeSwitch = () => {
        if (theme === darkTheme) {
            enableDarkMode()
        } else if (theme === lightTheme) {
            enableLightMode()
        }
    }
    // modeSwitch()
    // Switching themes on button click
    const switchTheme = e => {
        if (theme === darkTheme) {
            enableLightMode()
            console.log(theme)
        } else if (theme === lightTheme) {
            enableDarkMode()
            console.log(theme)
        }
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