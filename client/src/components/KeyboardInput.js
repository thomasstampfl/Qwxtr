import React, { useState, useEffect } from "react";
import { KEY_BACKSPACE } from '../keyTypes';

function keyHandler() {



    // const [cursor_index, setCursor] = useState(0)
    // const [cursor_string, setCString] = useState('')

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
    // }, [cursor_index])


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



}

export default keyHandler