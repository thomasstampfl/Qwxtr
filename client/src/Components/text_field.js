import React, { useState, useEffect } from "react"

function TextField(){
    const [str, setStr] = useState('');
    const [input_key, setInputKey] = useState('');
    const [cursor_index, setCursor] = useState(-1);

    //listen for keys
    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            setInputKey(event.key)
        })
    }, [])

    //do something with our keyboard input
    useEffect(() => {
        if (input_key != '') {
            if (input_key.length > 1) {
                //Commands
                if (input_key == "Backspace") {
                    setStr((prev) => (prev.slice(0, cursor_index) + prev.slice(cursor_index + 1)));
                    setCursor((prev) => ((prev > 0) ? prev - 1 : 0));
                }
            } else if (input_key.length > 0) {
                setStr((prev) => (prev + input_key));
                setCursor((prev) => (prev + 1));
            }
            console.log("inputkey triggered");
            setInputKey('');
        }
    }, [input_key])

    //do something when cursor changes
    useEffect(() => {
        if (cursor_index > str.length) {
            setCursor(str.length);
        }
        console.log(cursor_index);
        //setCommand("Cursor idx: " + String(cursor_index));
        //setCString(str.substring(0, cursor_index));
    }, [cursor_index])

    /*useEffect(() => {
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
    }, [input_key])*/

    return(
        <div className='textfield'>
            {str}
        </div>
    );
}

export default TextField;