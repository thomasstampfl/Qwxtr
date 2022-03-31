import React from "react"
import TextField from './components/TextField'
import NoteTitle from './components/NoteTitle'
import NoteList from './components/NoteList'

const App = () => {

    return (
        <>
            <h1>QWXTR</h1>
            <div className="content">
                <NoteTitle />

                <div className="row">
                    <NoteList />
                    <TextField />
                </div>

            </div>
        </>
    );
}

export default App
