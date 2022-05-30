import React from 'react'

function Header() {
    console.log("Header Component Re-Rendered");
    return (
        <h1>Header</h1>
    )
}

export default React.memo(Header)