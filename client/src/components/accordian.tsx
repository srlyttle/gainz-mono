import { useToggle } from '../hooks/useToggle'
import React from 'react'

interface Props {
    title: string
}
export const Accordian: React.FC<Props> = () => {
    const { isOpen, toggleOpen } = useToggle()
    return (
        <div>
            <div
                style={{
                    padding: '10px 20px',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '22px',
                }}
            ></div>
            <button onClick={toggleOpen}>
                Header <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <div>Content</div>}
        </div>
    )
}
