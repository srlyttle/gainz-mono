import React from 'react'

export const Editable: React.FC = () => {
    const [editable, setEditable] = React.useState(false)
    const [inputValue, setInputValue] = React.useState('Title')

    const toggleEditable = () => {
        setEditable((prevEditable) => !prevEditable)
    }

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value)
    }

    return (
        <div>
            {editable ? (
                <label htmlFor="title">
                    Title:
                    <input
                        type="text"
                        id="title"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </label>
            ) : (
                <>Title: {inputValue}</>
            )}
            <button onClick={toggleEditable}>
                {editable ? 'Cancel' : 'Edit'}
            </button>
        </div>
    )
}
