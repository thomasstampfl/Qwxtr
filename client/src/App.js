import React, { useState, useEffect } from "react"
import {KEY_BACKSPACE} from './keyTypes'
import {addStr} from './substring'

const App = () => {

    const [cursor, setCursor] = useState('')
    const [str, setStr] = useState('')
    const [command, setCommand] = useState('')

    useEffect(() => {
        console.log("STR: " + str)
    }, [str])

    const keyHandler = (key) => {
        if(key.length > 1){
            switch (key) {
                case KEY_BACKSPACE:
                    setCommand('deleting now...')
                    setStr((prev) => (prev.slice(0, -1)))
                    setCursor((prev) => (prev - 1))
                    // setCursor(str.length)
                    break;
                case 'ArrowLeft':
                    setCommand('move cursor left...')
                    break;
                case 'ArrowRight':
                    setCommand('move cursor right...')
                    break;
                case 'Meta':
                    setCommand('meta shift')
                    break;
                default:
                    setCommand('no command')
                    break;
            }
        } else {
            setStr((prev) => (prev + key))
            setCursor((prev) => (prev + 1))
            setCommand('')
        }
        
    }

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            // console.log(`Key: ${event.key} with keycode ${event.key} has been pressed`)
            keyHandler(event.key)
        })
    }, [])


    return (
        <div >
            <h1>Header</h1>
            <p>{command}</p>
            <div className='content'>
                {str}
            </div>
        </div>
    )
}

export default App