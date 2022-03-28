import React, { useState, useEffect } from "react"
import { KEY_BACKSPACE } from './keyTypes'
import { addStr } from './substring'

const App = () => {

    const [cursor_index, setCursor] = useState(0)
    const [cursor_string, setCString] = useState('')

    const [input_key, setInputKey] = useState('')
    const [str, setStr] = useState('')

    const [command, setCommand] = useState('')

    useEffect(() => {
        console.log("count: " + String(str.length))
        setCommand("Char count: " + String(str.length))
    }, [str])

    useEffect(() => {
        if (cursor_index > str.length) {
            setCursor(str.length);
        }
        setCommand("Cursor idx: " + String(cursor_index));
        setCString(str.substring(0, cursor_index));
    }, [cursor_index])

    useEffect(() => {
        if (input_key != '') {
            if (input_key.length > 1) {
                if (input_key == KEY_BACKSPACE) {
                    setStr((prev) => (prev.slice(0, cursor_index) + prev.slice(cursor_index + 1)));
                }
            } else if (input_key.length > 0) {
                setStr((prev) => (prev.slice(0, cursor_index) + input_key + prev.slice(cursor_index)));
                setCursor((prev) => (prev + 1));
            }
            console.log("inputkey triggered");
            setInputKey('');
        }
    }, [input_key])

    const keyHandler = (key) => {
        switch (key) {
            case KEY_BACKSPACE:
                setCursor((prev) => ((prev > 0) ? prev - 1 : 0));
                setCommand('deleting now...');
                setInputKey(key);
                break;
            case 'ArrowLeft':
                setCursor((prev) => ((prev > 0) ? prev - 1 : 0));
                break;
            case 'ArrowRight':
                setCursor((prev) => (prev + 1))
                break;
            case 'Meta':
                setCommand('meta shift')
                break;
            default:
                setCommand('no command')
                setInputKey(key);
                break;
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
            <h1>QWXTR</h1>
            <div className='content'>
                <div className="row">
                    <div className="note-title">note title</div>
                </div>
                <div className="row">
                    <div className="side-nav">
                        <div className="note-list">
                            <li>First</li>
                            <li>Second</li>
                            <li>Third</li>
                            <li>First</li>
                            <li>Second</li>
                            <li>Third</li>
                            <li>First</li>
                            <li>Second</li>
                            <li>Third</li>
                            <li>First</li>
                            <li>Second</li>
                            <li>Third</li>
                            <li>First</li>
                            <li>Second</li>
                            <li>Third</li>
                        </div>

                    </div>
                    <div className="note-content">{str}</div>
                </div>

                <p>{command}</p>
            </div>

        </div>
    )
}

export default App
