import React from 'react'
interface ToggleValue {
    isOpen: boolean
    toggleOpen: () => void
}

export const useToggle = (): ToggleValue => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleOpen = React.useCallback(() => {
        setIsOpen((prev) => !prev)
    }, [])

    const values = React.useMemo(
        () => ({
            isOpen,
            toggleOpen,
        }),
        [isOpen, toggleOpen]
    )

    return values
}
