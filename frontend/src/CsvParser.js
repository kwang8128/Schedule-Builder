import React from 'react'
import {useState} from 'react'

const CsvParser = () => {
    const [file, setFile] = useState();

    return(
        <form id='csv_form'>
            <input
                type='file'
                accept='.csv'
                id='csv_file'
                onChange={(e) => {
                    setFile(e.target.files[0])
                }}
            >
            </input>
            <button>Submit</button>
        </form>
    );
}

export default CsvParser;