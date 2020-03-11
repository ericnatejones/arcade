import { useEffect, useState } from 'react';

export function useKey(key) {
    const [pressed, setPressed] = useState(false)

    useEffect(() => {
        const match = event => key.toLowerCase() === event.key.toLowerCase()

        const onUp = event => {
            if (match(event)) setPressed(false)
        }
        const onDown = event => {
            if (match(event)) setPressed(true)
        }
        window.addEventListener("keydown", onDown)
        window.addEventListener("keyup", onUp)
        return () => {
            window.removeEventListener("keydown", onDown)
            window.removeEventListener("keyup", onUp)
        }
    }, [key])

    return pressed
}