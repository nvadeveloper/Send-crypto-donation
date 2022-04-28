import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { SunIcon, MoonIcon } from "@heroicons/react/solid"
import Logo from "./Logo"

const Header = () => {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <SunIcon className="w-10 h-10 text-yellow-500" role="button" onClick={() => setTheme('light')} />
            )
        }
        else {
            return (
                <MoonIcon className="w-10 h-10 text-gray-900" role="button" onClick={() => setTheme('dark')} />
            )
        }
    };

    return (
        <header>
            <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 dark:border-gray-700">
                <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
                    <div className="text-6xl w-10 h-10">
                        <Logo />
                    </div>
                    <div>
                        {renderThemeChanger()}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header



