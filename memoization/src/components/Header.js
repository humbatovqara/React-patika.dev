import React from 'react'

function Header({ data }) {
    console.log("Header Component Re-Rendered");
    return (
        <>
            <h1>Header</h1>

            <code>{JSON.stringify(data)}</code>
        </>
    )
}

export default React.memo(Header)