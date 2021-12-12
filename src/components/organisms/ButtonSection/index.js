import React from 'react'

const OButtonSection = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <button
                onClick={() => {
                    props.setIsFinish(0)
                }} style={{ border: !props.isFinish ? "3px solid yellow" : '' }}>
                Todo
            </button>
            <button
                onClick={() => {
                    props.setIsFinish(1)
                }} style={{ border: props.isFinish ? "3px solid blue" : '' }}>
                Completed
            </button>
        </div>
    )
}

export default OButtonSection
