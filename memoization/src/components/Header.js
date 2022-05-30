import React from 'react'

function Header({ increment }) {
    console.log("Header Component Re-Rendered");
    return (
        <>
            <h1>Header</h1>

            <button onClick={increment}>Click</button>
        </>
    )
}

export default React.memo(Header)