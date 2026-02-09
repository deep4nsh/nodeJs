import { useState } from 'react'
import axios from 'axios'

export default function Main() {
    const [showForm, setShowForm] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [readContent, setReadContent] = useState('')

    const handleCreateClick = () => {
        setShowForm(true)
    }

    const handleWrite = async () => {
        try {
            await axios.post('http://localhost:3000/write', { message: inputValue })
            alert('File written successfully!')
        } catch (error) {
            console.error('Error writing file:', error)
            alert('Failed to write file')
        }
    }

    const handleRead = async () => {
        try {
            const response = await axios.get('http://localhost:3000/read')
            setReadContent(response.data)
        } catch (error) {
            console.error('Error reading file:', error)
            alert('Failed to read file')
        }
    }

    return (
        <div>
            <h1>FS Model for Node</h1>
            {!showForm ? (
                <button onClick={handleCreateClick}>FS Create</button>
            ) : (
                <div style={{ border: '1px solid black', padding: '20px', margin: '20px', width: 'fit-content' }}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type text here..."
                        style={{ display: 'block', marginBottom: '10px' }}
                    />
                    <button onClick={handleWrite} style={{ marginRight: '5px' }}>FS Write</button>
                    <button onClick={handleRead}>FS Read</button>
                    {readContent && (
                        <div style={{ marginTop: '10px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
                            <h3>Read Content:</h3>
                            <p>{readContent}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
