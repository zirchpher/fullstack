import React from 'react'

interface Props {
    children: JSX.Element | JSX.Element[]
}

function TodoHeader({ children }: Props) {
    return (
        <header>
            {children}
        </header>
    )
}

export { TodoHeader }