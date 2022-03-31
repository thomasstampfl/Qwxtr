import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import { KEY_BACKSPACE } from '../keyTypes';

function TextField() {

    // const [cursor_index, setCursor] = useState(0)
    // const [cursor_string, setCString] = useState('')

    // const [input_key, setInputKey] = useState('')
    // const [str, setStr] = useState('')

    // const [command, setCommand] = useState('')

    // useEffect(() => {
    //     console.log("count: " + String(str.length))
    //     setCommand("Char count: " + String(str.length))
    // }, [str])

    // useEffect(() => {
    //     if (cursor_index > str.length) {
    //         setCursor(str.length);
    //     }
    //     setCommand("Cursor idx: " + String(cursor_index));
    //     setCString(str.substring(0, cursor_index));
    // }, [str, cursor_index]) // added str to dependecy array

    // useEffect(() => {
    //     if (input_key !== '') {
    //         if (input_key.length > 1) {
    //             if (input_key === KEY_BACKSPACE) {
    //                 setStr((prev) => (prev.slice(0, cursor_index) + prev.slice(cursor_index + 1)));
    //             }
    //         } else if (input_key.length > 0) {
    //             setStr((prev) => (prev.slice(0, cursor_index) + input_key + prev.slice(cursor_index)));
    //             setCursor((prev) => (prev + 1));
    //         }
    //         console.log("inputkey triggered");
    //         setInputKey('');
    //     }
    // }, [cursor_index, input_key]) // added cursor_index to dependecy array

    // const keyHandler = (key) => {
    //     switch (key) {
    //         case KEY_BACKSPACE:
    //             setCursor((prev) => ((prev > 0) ? prev - 1 : 0));
    //             setCommand('deleting now...');
    //             setInputKey(key);
    //             break;
    //         case 'ArrowLeft':
    //             setCursor((prev) => ((prev > 0) ? prev - 1 : 0));
    //             break;
    //         case 'ArrowRight':
    //             setCursor((prev) => (prev + 1))
    //             break;
    //         case 'Meta':
    //             setCommand('meta shift')
    //             break;
    //         default:
    //             setCommand('no command')
    //             setInputKey(key);
    //             break;
    //     }
    // }

    // useEffect(() => {
    //     document.addEventListener('keydown', (event) => {
    //         // console.log(`Key: ${event.key} with keycode ${event.key} has been pressed`)
    //         keyHandler(event.key)
    //     })
    // }, [])


    // return (
    //     <div >
    //         <div className='content'>
    //             <div className="row">
    //                 <div className="note-title">note title</div>
    //             </div>
    //             <div className="row">
    //                 <div className="side-nav">
    //                     <div className="note-list">
    //                         <li>First</li>
    //                         <li>Second</li>
    //                         <li>Third</li>
    //                         <li>First</li>
    //                         <li>Second</li>
    //                         <li>Third</li>
    //                         <li>First</li>
    //                         <li>Second</li>
    //                         <li>Third</li>
    //                         <li>First</li>
    //                         <li>Second</li>
    //                         <li>Third</li>
    //                         <li>First</li>
    //                         <li>Second</li>
    //                         <li>Third</li>
    //                     </div>
    //                 </div>
    //                 <div className="note-content">{str}</div>
    //             </div>

    //             <p>{command}</p>
    //             <p>{cursor_string}</p>
    //         </div>

    //     </div>
    // )







    const [cursor_index, setCursor] = useState(0)
    const [cursor_string, setCString] = useState('')

    const [input_key, setInputKey] = useState('')
    const [str, setStr] = useState('')

    const [command, setCommand] = useState('')

    // useEffect(() => {                    // TODO: Is this useful Scully?
    //     console.log("count: " + str.length)
    //     setCommand("Char count: " + str.length)
    // }, [str])

    useEffect(() => {
        if (cursor_index > str.length) {
            setCursor(str.length);
        }
        // setCommand("Cursor idx: " + String(cursor_index));
        setCommand("Cursor idx: " + cursor_index);
        setCString(str.substring(0, cursor_index));
    }, [str, cursor_index]) // added str to dependecy array

    useEffect(() => {
        if (input_key !== '') {
            if (input_key.length > 1) {
                if (input_key === KEY_BACKSPACE) {
                    setStr((prev) => (prev.slice(0, cursor_index) + prev.slice(cursor_index + 1)));
                }
            } else if (input_key.length > 0) {
                setStr((prev) => (prev.slice(0, cursor_index) + input_key + prev.slice(cursor_index)));
                setCursor((prev) => (prev + 1));
            }
            console.log("inputkey triggered and it is: " + input_key);
            setInputKey('');
        } else {
            console.log("input_key === '' ???")
        }
    }, [cursor_index, input_key]) // added cursor_index to dependecy array

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
            case ' ':
                console.log("This was a spacebar");
                setInputKey(key);
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
            if (event.key === " ") {        //     This prevents the default behavior of moving the webpage down as you hit spacebar
                event.preventDefault();
            }
            keyHandler(event.key)
        })
    }, [])

    // removes this code the input multiplication bug?
    useEffect(() => {
        return () => {
            document.removeEventListener('keydown', () => console.log("removed eventlistener."))
        };
    }, []);


    return (
        <div>
            <div className="note-content">{str}</div>

            <p>Char count: {str.length}</p>
            <p>Command: {command}</p>
            <p>String until cursor: {cursor_string}</p>
        </div>
    )
}

export default TextField;
