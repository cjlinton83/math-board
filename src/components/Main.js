import React from 'react'

const Main = props => {
    return (
        <main className="flex-shrink-0" role="main">
            <div className="container mt-5">
                {props.content}
            </div>
        </main>
    )
}

export default Main