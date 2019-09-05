import React from 'react'

const Main = props => {
    return (
        <main role="main" className="flex-shrink-0">
            <div className="container mt-5" style={{padding: '60px 15px 0'}}>
                {props.content}
            </div>
        </main>
    )
}

export default Main
