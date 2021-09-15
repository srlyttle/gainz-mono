import { App } from './App'
import { render, screen } from '@testing-library/react'

test('renders simulator screen with title', () => {
    render(<App />)
    const title = screen.getByTestId('simulator-title')
    expect(title).toBeInTheDocument()
})
